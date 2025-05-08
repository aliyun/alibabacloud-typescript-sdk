// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateRecordsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of DNS records to be created.
   * 
   * This parameter is required.
   */
  recordListShrink?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      recordListShrink: 'RecordList',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordListShrink: 'string',
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

