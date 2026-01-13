// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindInstance2VpcRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mkdd-test
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xu6666
   */
  instanceVpcName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      instanceVpcName: 'InstanceVpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      instanceVpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

