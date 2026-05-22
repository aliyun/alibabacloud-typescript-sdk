// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledPreloadJobRequest extends $dara.Model {
  /**
   * @remarks
   * The method to submit URLs to be prefetched.
   * 
   * Valid values:
   * 
   * *   **textBox**
   * *   **oss**
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
  insertWay?: string;
  /**
   * @remarks
   * The name of the scheduled prefetch task.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The URL of the OSS object that stores the URLs to be prefetched.
   * 
   * @example
   * https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  ossUrl?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 190007158391808
   */
  siteId?: number;
  /**
   * @remarks
   * The URLs to be prefetched. This parameter is required if you set InsertWay to textBox.
   * 
   * @example
   * http://testurl.com/a.txt
   * http://testurl.com/b.txt
   */
  urlList?: string;
  static names(): { [key: string]: string } {
    return {
      insertWay: 'InsertWay',
      name: 'Name',
      ossUrl: 'OssUrl',
      siteId: 'SiteId',
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insertWay: 'string',
      name: 'string',
      ossUrl: 'string',
      siteId: 'number',
      urlList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

