// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableOpenSearchPublicEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The target node type. Valid values:
   * 
   * - **search**: data node. This is the default value.
   * - **dashboard**: dashboard node.
   * 
   * @example
   * search
   */
  nodeType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      nodeType: 'NodeType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      nodeType: 'string',
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

