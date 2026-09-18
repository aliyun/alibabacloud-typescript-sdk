// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportOneTaskPhoneNumberShrinkRequest extends $dara.Model {
  /**
   * @example
   * 81
   */
  encryptionType?: number;
  /**
   * @remarks
   * The extension number.
   * 
   * @example
   * 示例值示例值示例值
   */
  extension?: string;
  /**
   * @remarks
   * The external serial number. We recommend that you use a unique ID. The value cannot exceed 128 characters.
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
   * The variable list in Map format.
   * > Variable format for engine-based voice call tasks:
   * > - {"startWordParam.VariableKey1":"VariableValue1","promptParam.VariableKey2":"VariableValue2","bizParam.VariableKey3":"VariableValue3"}
   * 
   * @example
   * {"VariableKey1":"VariableValue1","VariableKey2":"VariableValue2"}
   * For example values of engine-based voice call tasks, refer to the description on the left
   */
  variablesShrink?: string;
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
      variablesShrink: 'Variables',
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
      variablesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

