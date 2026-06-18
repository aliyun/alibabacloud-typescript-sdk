// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * cep-002
   */
  customEndpointId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mydatabase
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the custom endpoint.
   * 
   * @example
   * secondary-endpoint
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether a node automatically joins the cluster and starts providing services after it is added or recovered.
   * 
   * @example
   * true
   */
  nodeAutoEnter?: boolean;
  /**
   * @remarks
   * The node IDs.
   * 
   * @example
   * node3
   */
  nodeIds?: string;
  /**
   * @remarks
   * The role of the node.
   * 
   * @example
   * master
   */
  nodeRole?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      customEndpointId: 'CustomEndpointId',
      DBInstanceName: 'DBInstanceName',
      name: 'Name',
      nodeAutoEnter: 'NodeAutoEnter',
      nodeIds: 'NodeIds',
      nodeRole: 'NodeRole',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEndpointId: 'string',
      DBInstanceName: 'string',
      name: 'string',
      nodeAutoEnter: 'boolean',
      nodeIds: 'string',
      nodeRole: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

