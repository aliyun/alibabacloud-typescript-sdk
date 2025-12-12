// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManageAICLoginRequest extends $dara.Model {
  /**
   * @remarks
   * Manage actions
   * 
   * Valid value:
   * 
   * *   open
   * *   close
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  actionName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aic-xxx-1
   */
  instanceId?: string;
  /**
   * @remarks
   * Public Key Grouping
   * 
   * @example
   * g-test
   */
  keyGroup?: string;
  /**
   * @remarks
   * Public Key Name
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

