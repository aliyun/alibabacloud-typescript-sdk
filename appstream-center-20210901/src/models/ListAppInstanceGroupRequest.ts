// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstanceGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * design
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

export class ListAppInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the app image. You can obtain the ID from the Image Management page in the WUYING Cloud App console.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @remarks
   * The ID of the app instance group.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the app instance group. Fuzzy match is supported. For example, if you specify `Office App`, app instance groups whose names contain `Office App` are queried, such as `My Office App` and `Office App A`.
   * 
   * @example
   * Office App
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The ID of the region to which the app instance group belongs. For more information about supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The list of excluded authorization user group IDs.
   * 
   * **if can be null:**
   * true
   */
  excludedUserGroupIds?: string[];
  /**
   * @remarks
   * The ID of the instance type for the purchased resources. You can obtain the ID by calling the [ListNodeInstanceType](~~ListNodeInstanceType~~) operation.
   * 
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-hongkong+dir-643067****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The value cannot exceed `100`.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  regionId?: string;
  /**
   * @remarks
   * The statuses of the app instance groups.
   */
  status?: string[];
  /**
   * @remarks
   * The list of tags.
   * 
   * **if can be null:**
   * true
   */
  tag?: ListAppInstanceGroupRequestTag[];
  /**
   * @remarks
   * The list of authorized user group IDs.
   * 
   * **if can be null:**
   * true
   */
  userGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appCenterImageId: 'AppCenterImageId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      bizRegionId: 'BizRegionId',
      excludedUserGroupIds: 'ExcludedUserGroupIds',
      nodeInstanceType: 'NodeInstanceType',
      officeSiteId: 'OfficeSiteId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      regionId: 'RegionId',
      status: 'Status',
      tag: 'Tag',
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCenterImageId: 'string',
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      bizRegionId: 'string',
      excludedUserGroupIds: { 'type': 'array', 'itemType': 'string' },
      nodeInstanceType: 'string',
      officeSiteId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      regionId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListAppInstanceGroupRequestTag },
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.excludedUserGroupIds)) {
      $dara.Model.validateArray(this.excludedUserGroupIds);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

