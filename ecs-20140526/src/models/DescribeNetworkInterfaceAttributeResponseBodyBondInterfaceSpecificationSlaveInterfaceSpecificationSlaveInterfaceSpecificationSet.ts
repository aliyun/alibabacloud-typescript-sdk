// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfaceAttributeResponseBodyBondInterfaceSpecificationSlaveInterfaceSpecificationSlaveInterfaceSpecificationSet extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  bondNetworkInterfaceId?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  slaveNetworkInterfaceId?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  workState?: string;
  static names(): { [key: string]: string } {
    return {
      bondNetworkInterfaceId: 'BondNetworkInterfaceId',
      slaveNetworkInterfaceId: 'SlaveNetworkInterfaceId',
      workState: 'WorkState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondNetworkInterfaceId: 'string',
      slaveNetworkInterfaceId: 'string',
      workState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

