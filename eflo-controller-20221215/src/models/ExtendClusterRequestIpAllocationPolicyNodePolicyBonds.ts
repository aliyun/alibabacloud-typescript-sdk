// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExtendClusterRequestIpAllocationPolicyNodePolicyBonds extends $dara.Model {
  /**
   * @remarks
   * The bond name.
   * 
   * @example
   * Bond0
   */
  name?: string;
  /**
   * @remarks
   * The cluster subnet from which the IP address originates.
   * 
   * @example
   * subnet-fdo3dv
   */
  subnet?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      subnet: 'Subnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      subnet: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

