// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetScopeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated.
   * 
   * @example
   * 1792800000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated.
   * 
   * @example
   * 1792803600000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the asset scope record, which corresponds to the Id request parameter.
   * 
   * @example
   * 1932
   */
  id?: number;
  /**
   * @remarks
   * The effective scope mode. Valid values:
   * 
   * - **UserGroupAll**: all user groups.
   * - **UserGroupNormal**: specified user groups.
   * - **DeviceGroupNormal**: specified device groups.
   * - **DevTagNormal**: specified device tags.
   * 
   * The meaning of MatchTargetIds is determined by this field.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The list of effective scope targets. All elements are strings. The meaning of each element is determined by MatchMode:
   * 
   * - **UserGroupAll**: Scope matching does not depend on this list.
   * - **UserGroupNormal**: the user group ID.
   * - **DeviceGroupNormal**: the device group ID.
   * - **DevTagNormal**: the device tag value.
   * 
   * This list is not a list of matched endpoint UUIDs.
   */
  matchTargetIds?: string[];
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      matchMode: 'MatchMode',
      matchTargetIds: 'MatchTargetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      matchMode: 'string',
      matchTargetIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.matchTargetIds)) {
      $dara.Model.validateArray(this.matchTargetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetScopeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The endpoint asset scope details.
   */
  data?: DescribeAssetScopeResponseBodyData;
  /**
   * @remarks
   * The unique identifier of the request, which is used to troubleshoot and locate issues.
   * 
   * @example
   * 01A157FA-F957-3A5A-A6B8-5BBB8ADB****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAssetScopeResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

