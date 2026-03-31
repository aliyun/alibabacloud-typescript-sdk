// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReportTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * crt-xxx
   */
  reportTemplateId?: string;
  /**
   * @example
   * A7A0FFF8-0B44-40C6-8BBF-3A185EFDFXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      reportTemplateId: 'ReportTemplateId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportTemplateId: 'string',
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

