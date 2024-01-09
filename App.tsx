import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";



const App = () => {

  const [modelVisible, setModelVisible] = useState(false);

const handleShowmodel = () => {
  setModelVisible(true);
}

const handleCloseModel = () => {
  setModelVisible(false);
};

  return(
    <View>
      <Button title="Show GDPR Content" onPress={handleShowmodel} />
      <Modal
          animationType="slide"
          transparent={true}
          visible={modelVisible}
          onRequestClose={handleCloseModel}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text>GDPR Content Here....</Text>
                <Button title="Close" onPress={handleCloseModel} />
              </View>

            </View>
          </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default App;