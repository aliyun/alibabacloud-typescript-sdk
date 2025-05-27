// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsTemplateListResponseBodySmsTemplateListReason extends $dara.Model {
  /**
   * @remarks
   * The time when the message template was rejected. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-06-04 16:01:17
   */
  rejectDate?: string;
  /**
   * @remarks
   * The reason why the message template was rejected.
   * 
   * @example
   * The document cannot verify the authenticity of the information. Please upload it again.
   */
  rejectInfo?: string;
  /**
   * @remarks
   * The remarks about the rejection.
   * 
   * @example
   * The document cannot verify the authenticity of the information. Please upload it again.
   */
  rejectSubInfo?: string;
  static names(): { [key: string]: string } {
    return {
      rejectDate: 'RejectDate',
      rejectInfo: 'RejectInfo',
      rejectSubInfo: 'RejectSubInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rejectDate: 'string',
      rejectInfo: 'string',
      rejectSubInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

