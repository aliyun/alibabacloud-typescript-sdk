// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAppInstanceGroupRequestTag } from "./ListAppInstanceGroupRequestTag";


export class ListAppInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The image ID of the app. You can obtain the ID from the Images page in the App Streaming console.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the delivery groups to query. Fuzzy match is used for queries. For example, if you set this parameter to `Office App`, all delivery groups whose names contain `Office App` are queried, such as `My Office Apps` and `Office App A`.
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The ID of the region where the delivery group resides. For information about the supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * Valid values:
   * 
   * *   cn-shanghai: China (Shanghai)
   * *   cn-hangzhou: China (Hangzhou)
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The ID of the resource specification that you purchase. You can call the [ListNodeInstanceType](~~ListNodeInstanceType~~) operation to obtain the ID.
   * 
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
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
   * The number of entries per page. The value cannot be greater than `100`.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type.
   * 
   * Valid value:
   * 
   * *   CloudApp: App Streaming
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The region ID
   * 
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the delivery groups.
   */
  status?: string[];
  /**
   * **if can be null:**
   * true
   */
  tag?: ListAppInstanceGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      appCenterImageId: 'AppCenterImageId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      bizRegionId: 'BizRegionId',
      nodeInstanceType: 'NodeInstanceType',
      officeSiteId: 'OfficeSiteId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      regionId: 'RegionId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCenterImageId: 'string',
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      bizRegionId: 'string',
      nodeInstanceType: 'string',
      officeSiteId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      regionId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListAppInstanceGroupRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

