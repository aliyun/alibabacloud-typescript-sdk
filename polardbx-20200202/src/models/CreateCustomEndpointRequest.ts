// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-hzjasd****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ext-win-live-17
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  nodeAutoEnter?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * r-bp1l5kfgw8****c3iv
   */
  nodeIds?: string;
  /**
   * @example
   * READONLY
   */
  nodeRole?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-*********
   */
  vSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-bp1ndoug37dtwoedlmru0
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      name: 'Name',
      nodeAutoEnter: 'NodeAutoEnter',
      nodeIds: 'NodeIds',
      nodeRole: 'NodeRole',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      name: 'string',
      nodeAutoEnter: 'boolean',
      nodeIds: 'string',
      nodeRole: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

