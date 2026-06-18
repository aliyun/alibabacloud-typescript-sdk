// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-hzjasd****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the access control instance. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. The name can contain digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * ext-win-live-17
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether a node automatically joins the cluster and starts providing services after the node is added or recovered.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  nodeAutoEnter?: boolean;
  /**
   * @remarks
   * The IDs of the monitored nodes when RemindUnit (object type) is set to NODE (node). Separate multiple IDs with commas (,). A maximum of 50 nodes can be monitored per rule.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1l5kfgw8****c3iv
   */
  nodeIds?: string;
  /**
   * @remarks
   * To query the metrics of a read-only node in a cloud-native read/write splitting architecture instance, set this parameter to **READONLY** and specify the **NodeId** parameter.
   * >  In other cases, you do not need to specify this parameter or you can set it to **MASTER**.
   * 
   * @example
   * READONLY
   */
  nodeRole?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-*********
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the endpoint resides.
   * 
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

