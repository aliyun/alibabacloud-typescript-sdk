// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarFsRequestTag extends $dara.Model {
  /**
   * @example
   * testKey
   */
  key?: string;
  /**
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
   * @example
   * pc-2ze8u21s03******
   */
  DBClusterId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * pfs-ins1********
   */
  polarFsInstanceDescription?: string;
  /**
   * @example
   * pfs-ins1*******
   */
  polarFsInstanceIds?: string;
  /**
   * @example
   * all
   */
  polarFsType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * pc-2zejpr41d9xk*****
   */
  relativeDbClusterId?: string;
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

