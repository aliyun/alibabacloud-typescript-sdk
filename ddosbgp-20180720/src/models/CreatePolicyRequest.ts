// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The policy name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The version of the port-specific mitigation policy. Valid values:
   * 
   * - **Not specified**: creates a default surf DPI engine policy.
   * - **2**: creates a new stream DPI engine policy.
   * > Only port-specific mitigation policies support this parameter.
   * 
   * @example
   * 2
   */
  portVersion?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * - **l3**: IP-specific mitigation policy.
   * - **l4**: port-specific mitigation policy.
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

