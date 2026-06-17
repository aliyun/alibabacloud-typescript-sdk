// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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

export class DescribeApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * A list of application IDs. If specified, this operation returns information only about the specified applications.
   * 
   * @example
   * pa-**************
   */
  applicationIds?: string;
  applicationTypes?: string;
  /**
   * @remarks
   * The ID of the PolarDB instance. If specified, this operation returns information only about applications associated with this instance.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * A list of tags. A tag is a key-value pair.
   */
  tag?: DescribeApplicationsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationTypes: 'ApplicationTypes',
      DBClusterId: 'DBClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: 'string',
      applicationTypes: 'string',
      DBClusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeApplicationsRequestTag },
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

