// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateRecordsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  recordListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
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

