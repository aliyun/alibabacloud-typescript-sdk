// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarFsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * testValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarFsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the PolarDB instance on which the application depends.
   * 
   * @example
   * pc-2ze8u21s03******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The page number. The value must be an integer greater than 0 and not exceeding the maximum value of Integer.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The description of the PolarFS instance.
   * 
   * @example
   * pfs-ins1********
   */
  polarFsInstanceDescription?: string;
  /**
   * @remarks
   * The list of PolarFS instance IDs, separated by commas (,).
   * 
   * @example
   * pfs-ins1*******
   */
  polarFsInstanceIds?: string;
  /**
   * @remarks
   * The PolarFS type.
   * 
   * @example
   * all
   */
  polarFsType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the associated PolarDB cluster.
   * 
   * @example
   * pc-2zejpr41d9xk*****
   */
  relativeDbClusterId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribePolarFsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      polarFsInstanceDescription: 'PolarFsInstanceDescription',
      polarFsInstanceIds: 'PolarFsInstanceIds',
      polarFsType: 'PolarFsType',
      regionId: 'RegionId',
      relativeDbClusterId: 'RelativeDbClusterId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      polarFsInstanceDescription: 'string',
      polarFsInstanceIds: 'string',
      polarFsType: 'string',
      regionId: 'string',
      relativeDbClusterId: 'string',
      tag: { 'type': 'array', 'itemType': DescribePolarFsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

