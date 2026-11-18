// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountParameterRequest extends $dara.Model {
  /**
   * @remarks
   * The account name.
   * 
   * This parameter is required.
   * 
   * @example
   * demoaccount
   */
  accountName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1s4h3oosz5y8ilc7
   */
  instanceId?: string;
  /**
   * @remarks
   * The account parameters to modify. The parameters must be in JSON format, and the modified values overwrite the original values. For example, if you want to modify only the access-db-id parameter to 1, you can pass {"access-db-id":"1"}. Currently, only two parameters are supported: access-db-id (accessible DB ID) and cu-limit (throttling value (CU limit)).
   * >Notice: This operation is supported only for Tair Serverless KV instances.
   * 
   * This parameter is required.
   * 
   * @example
   * {"access-db-id":"1","cu-limit":"10"}
   */
  parameters?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      instanceId: 'InstanceId',
      parameters: 'Parameters',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      instanceId: 'string',
      parameters: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

