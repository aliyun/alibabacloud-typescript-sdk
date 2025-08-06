// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaAuditResultDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the video.
   * 
   * This parameter is required.
   * 
   * @example
   * 93ab850b4f6f*****54b6e91d24d81d4
   */
  mediaId?: string;
  /**
   * @remarks
   * The page number. The default value is **1**. A maximum of **20** records can be returned on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      pageNo: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

