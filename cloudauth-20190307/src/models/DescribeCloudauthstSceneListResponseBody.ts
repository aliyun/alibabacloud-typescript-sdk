// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudauthstSceneListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-01-04 19:56:04
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2023-01-04 19:56:04
   */
  gmtModified?: string;
  /**
   * @remarks
   * The Alibaba Cloud Marketplace commodity code.
   * 
   * @example
   * SMART_VERIFY
   */
  productCode?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * -
   */
  productName?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 20**40
   */
  sceneId?: string;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * 测试场景
   */
  sceneName?: string;
  /**
   * @remarks
   * Specifies whether to deliver files generated during authentication to the customer\\"s OSS. Valid values:
   * - **Y**: Enabled.
   * - **N**: Disabled.
   * 
   * @example
   * N
   */
  storeImage?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      productCode: 'ProductCode',
      productName: 'ProductName',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      storeImage: 'StoreImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      productCode: 'string',
      productName: 'string',
      sceneId: 'string',
      sceneName: 'string',
      storeImage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudauthstSceneListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of scenarios.
   */
  items?: DescribeCloudauthstSceneListResponseBodyItems[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEC88747-2F3E-539E-91A6-84E321CAA12B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeCloudauthstSceneListResponseBodyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

