// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaAuditResultDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The video ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 93ab850b4f6f*****54b6e91d24d81d4
   */
  mediaId?: string;
  /**
   * @remarks
   * The page number of the video content review results. Default value: **1**. A maximum of **20** records are returned per page.
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

