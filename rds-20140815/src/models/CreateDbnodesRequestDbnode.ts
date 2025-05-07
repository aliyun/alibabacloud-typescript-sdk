// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBNodesRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * The specification information of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql.n2.medium.xc
   */
  classCode?: string;
  /**
   * @remarks
   * The vSwitch ID of the node.
   * 
   * @example
   * vsw-bp1sxxsodv28ey5dl****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The ID of the zone in which the node is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-zhangjiakou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'classCode',
      vswitchId: 'vswitchId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

