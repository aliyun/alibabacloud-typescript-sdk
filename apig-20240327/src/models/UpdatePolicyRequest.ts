// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Policy configuration
   * 
   * This parameter is required.
   * 
   * @example
   * {"unitNum":1,"timeUnit":"s","enable":true}
   */
  config?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * this is a timeout policy description
   */
  description?: string;
  /**
   * @remarks
   * Policy name
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

