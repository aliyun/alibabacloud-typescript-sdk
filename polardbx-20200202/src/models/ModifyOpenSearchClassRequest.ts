// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOpenSearchClassRequest extends $dara.Model {
  /**
   * @remarks
   * The target disk size per node, in GB. If not specified, the current disk size is retained.
   * 
   * @example
   * 500
   */
  DBInstanceDiskSize?: number;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-spsil01pww4hfz
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The node specifications code of the PolarDB-X Search data node. This parameter is required. Active node specifications depend on the region and sales configuration, and must differ from the current node specifications.
   * 
   * @example
   * opensearch.sn2ne.large.1
   */
  searchClassCode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDiskSize: 'DBInstanceDiskSize',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      searchClassCode: 'SearchClassCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDiskSize: 'number',
      DBInstanceName: 'string',
      regionId: 'string',
      searchClassCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

