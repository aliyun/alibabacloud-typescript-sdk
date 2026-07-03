// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The policy configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * {"unitNum":1,"timeUnit":"s","enable":true}
   */
  config?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * 这是一条网关超时策略
   */
  description?: string;
  /**
   * @remarks
   * The Policy Name.
   * 
   * This parameter is required.
   * 
   * @example
   * celue-timeout-test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

