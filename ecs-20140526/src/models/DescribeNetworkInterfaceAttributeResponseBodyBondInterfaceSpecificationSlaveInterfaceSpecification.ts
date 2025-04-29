// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecificationSlaveInterfaceSpecificationSlaveInterfaceSpecificationSet } from "./DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecificationSlaveInterfaceSpecificationSlaveInterfaceSpecificationSet";


export class DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecificationSlaveInterfaceSpecification extends $dara.Model {
  slaveInterfaceSpecificationSet?: DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecificationSlaveInterfaceSpecificationSlaveInterfaceSpecificationSet[];
  static names(): { [key: string]: string } {
    return {
      slaveInterfaceSpecificationSet: 'SlaveInterfaceSpecificationSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slaveInterfaceSpecificationSet: { 'type': 'array', 'itemType': DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecificationSlaveInterfaceSpecificationSlaveInterfaceSpecificationSet },
    };
  }

  validate() {
    if(Array.isArray(this.slaveInterfaceSpecificationSet)) {
      $dara.Model.validateArray(this.slaveInterfaceSpecificationSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

