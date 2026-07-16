// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportRecordCnamesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The exported CNAME content.
   * 
   * @example
   * a.com a.com.cname.zone
   */
  content?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2430E05E-1340-5773-B5E1-B743929F46F2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

