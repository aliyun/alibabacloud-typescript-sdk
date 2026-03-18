// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  portVersion?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **l3**: IP-specific mitigation policies.
   * *   **l4**: port-specific mitigation policies.
   * 
   * This parameter is required.
   * 
   * @example
   * l3
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      portVersion: 'PortVersion',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      portVersion: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

