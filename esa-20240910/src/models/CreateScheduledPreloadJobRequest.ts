// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledPreloadJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  insertWay?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  ossUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
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

