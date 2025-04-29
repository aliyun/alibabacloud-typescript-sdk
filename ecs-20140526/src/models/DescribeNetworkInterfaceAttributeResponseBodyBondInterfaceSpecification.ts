// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecificationSlaveInterfaceSpecification } from "./DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecificationSlaveInterfaceSpecification";


export class DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecification extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is in invitational preview and unavailable for general users.
   * 
   * @example
   * null
   */
  bondMode?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and unavailable for general users.
   */
  slaveInterfaceSpecification?: DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecificationSlaveInterfaceSpecification;
  static names(): { [key: string]: string } {
    return {
      bondMode: 'BondMode',
      slaveInterfaceSpecification: 'SlaveInterfaceSpecification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondMode: 'string',
      slaveInterfaceSpecification: DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecificationSlaveInterfaceSpecification,
    };
  }

  validate() {
    if(this.slaveInterfaceSpecification && typeof (this.slaveInterfaceSpecification as any).validate === 'function') {
      (this.slaveInterfaceSpecification as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

