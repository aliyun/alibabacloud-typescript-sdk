// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The exported DNS records.
   * 
   * @example
   * ;; site:example.com.\\n;; Exported:2024-01-24 15:54:35\\n\\n;; A Records\\na1.example.com. 30 IN A 1.1.1.1 direct\\na2.example.com. 30 IN A 1.1.1.1 direct\\na3.example.com. 30 IN A 1.1.1.1 direct\\n
   */
  content?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C69B5894-D1BA-592C-95D0-DADBE7AEAC63
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

