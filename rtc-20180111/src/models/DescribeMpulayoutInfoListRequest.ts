// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMPULayoutInfoListRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID. You can specify only one ID. Create or view IDs in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * Layout ID. To get a layout ID, see [CreateMPULayout](https://help.aliyun.com/document_detail/162192.html).
   * 
   * @example
   * 2
   */
  layoutId?: number;
  /**
   * @remarks
   * Layout name.
   * 
   * @example
   * LayoutName
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * Page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      layoutId: 'LayoutId',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      layoutId: 'number',
      name: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

