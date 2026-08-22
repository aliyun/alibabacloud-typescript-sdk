// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableOpenSearchPublicEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The type of the target node. Valid values:
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
   * The region in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
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

