// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The website ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the ID.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

