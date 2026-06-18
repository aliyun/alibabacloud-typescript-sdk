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
   * The external ID. We recommend that you use a unique ID to ensure idempotency. The value cannot exceed 128 characters.
   * 
   * @example
   * 94ba739b-xxxx-ef91-335d-4be006c34899
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number of the callee.
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
   * A list of variables in a map.
   * 
   * > The format of variables for an engine-based call task is as follows:
   * >
   * > - {"startWordParam.variable_key1":"variable_value1","promptParam.variable_key2":"variable_value2","bizParam.variable_key3":"variable_value3"}
   * 
   * @example
   * {"变量key1":"变量值1","变量key2":"变量值2"}
   * 引擎呼叫任务示例值请看左侧描述
   */
  variablesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionType: 'EncryptionType',
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

