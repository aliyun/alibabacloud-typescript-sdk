// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledPreloadJobRequest extends $dara.Model {
  /**
   * @remarks
   * The method of uploading prefetch files. Text box and OSS upload methods are supported.
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
   * The OSS file for the scheduled prefetch task. Enter the address of the OSS file.
   * Note: The OSS file contains the URLs that you want to prefetch.
   * 
   * @example
   * https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  ossUrl?: string;
  /**
   * @remarks
   * The site ID. You can obtain it by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 190007158391808
   */
  siteId?: number;
  /**
   * @remarks
   * The list of URLs to prefetch. This parameter is used when you upload prefetch files via the text box.
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

