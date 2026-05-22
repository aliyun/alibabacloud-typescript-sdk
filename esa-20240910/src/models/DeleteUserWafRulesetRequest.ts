// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserWafRulesetRequest extends $dara.Model {
  /**
   * @remarks
   * WAF ruleset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * esa-xxxxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

