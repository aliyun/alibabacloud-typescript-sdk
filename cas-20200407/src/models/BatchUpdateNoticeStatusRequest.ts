// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateNoticeStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The list of primary key identifiers to be synchronized to Certificate Management Service. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 888
   */
  ids?: string;
  /**
   * @remarks
   * The language type for the request and the received message. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The business code of message notification. The value is fixed as ssl.
   * 
   * @example
   * ssl
   */
  noticeBiz?: string;
  /**
   * @remarks
   * Specifies whether to enable message notification.
   * \\--enable: enables message notification.
   * \\--disable: disables message notification.
   * 
   * This parameter is required.
   * 
   * @example
   * disable
   */
  noticeStatus?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 47.98.242.200
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      lang: 'Lang',
      noticeBiz: 'NoticeBiz',
      noticeStatus: 'NoticeStatus',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      lang: 'string',
      noticeBiz: 'string',
      noticeStatus: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

