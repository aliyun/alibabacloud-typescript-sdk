// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManageAICLoginRequest extends $dara.Model {
  /**
   * @remarks
   * The management action.
   * When this parameter is set to open, the AIC instance must be in the running state. You can call DescribeAICInstances to query the state.
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  actionName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * aic-xxx-1
   */
  instanceId?: string;
  /**
   * @remarks
   * The group of the public key.
   * When you set ActionName to open and use the public key to log on, you must first upload the public key by calling UploadAICPublicKey and provide the corresponding KeyName and KeyGroup.
   * 
   * @example
   * g-test
   */
  keyGroup?: string;
  /**
   * @remarks
   * The name of the public key.
   * When you set ActionName to open and use the public key to log on, you must first upload the public key by calling UploadAICPublicKey and provide the corresponding KeyName and KeyGroup.
   * 
   * @example
   * mykey
   */
  keyName?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      instanceId: 'InstanceId',
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      instanceId: 'string',
      keyGroup: 'string',
      keyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

