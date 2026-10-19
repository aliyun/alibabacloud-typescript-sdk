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
   * The account parameters to modify, in JSON format. The modified values overwrite the original values. For example, if you want to modify only the access-db-id parameter to 1, pass in {"access-db-id":"1"}.
   * Only two parameters are supported: access-db-id (accessible DB ID) and cu-limit (CU Limit).
   * >Notice: Currently, only Tair Serverless KV instances are supported.
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

