// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * Contact whitelist ID
   * 
   * This parameter is required.
   * 
   * @example
   * 08c32b67-43cd-4d6a-b7ea-d057xxxxxxxx
   */
  contactWhiteListId?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * Operator information
   * 
   * @example
   * 测试人
   */
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      contactWhiteListId: 'ContactWhiteListId',
      instanceId: 'InstanceId',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactWhiteListId: 'string',
      instanceId: 'string',
      operator: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

