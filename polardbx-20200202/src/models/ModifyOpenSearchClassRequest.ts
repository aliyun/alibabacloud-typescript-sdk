// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOpenSearchClassRequest extends $dara.Model {
  /**
   * @remarks
   * The target disk size per node, in GB. If this parameter is not specified, the current disk size is retained.
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
   * The data node specifications code for PolarDB-X Search. This parameter is required. Active node specifications depend on the region and sales configuration, and must be different from the current node specifications.
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

