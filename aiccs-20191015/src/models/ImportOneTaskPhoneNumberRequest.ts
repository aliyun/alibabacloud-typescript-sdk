// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportOneTaskPhoneNumberRequest extends $dara.Model {
  /**
   * @remarks
   * The encryption method. Valid values:
   * - 0: no encryption
   * - 1: MD5
   * - 2: SHA256
   * - 3: SM3
   * 
   * @example
   * 81
   */
  encryptionType?: number;
  /**
   * @remarks
   * The extension number.
   * 
   * @example
   * SampleValueSampleValueSampleValue
   */
  extension?: string;
  /**
   * @remarks
   * The external serial number. Use a unique ID. The value cannot exceed 128 characters in length.
   * 
   * @example
   * 94ba739b-xxxx-ef91-335d-4be006c34899
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The called phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 180******
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1231231212****
   */
  taskId?: number;
  /**
   * @remarks
   * The list of variables in map format.
   * > Variable format for engine call tasks
   * > - {"startWordParam.variableKey1":"variableValue1","promptParam.variableKey2":"variableValue2","bizParam.variableKey3":"variableValue3"}
   * 
   * @example
   * {"variableKey1":"variableValue1","variableKey2":"variableValue2"}
   */
  variables?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      encryptionType: 'EncryptionType',
      extension: 'Extension',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionType: 'number',
      extension: 'string',
      outId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

