// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledPreloadJobRequest extends $dara.Model {
  /**
   * @remarks
   * The method for uploading the preload file. Valid values are `Textbox` and `OSS`.
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
  insertWay?: string;
  /**
   * @remarks
   * The name of the scheduled preload job.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The URL of the OSS file that contains the URLs to preload.
   * 
   * @example
   * https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  ossUrl?: string;
  /**
   * @remarks
   * The ID of the site. You can get this ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 190007158391808
   */
  siteId?: number;
  /**
   * @remarks
   * The list of URLs to preload. This parameter is used when `InsertWay` is set to `Textbox`.
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

