// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteReportTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the report template.
   * 
   * @example
   * crt-xxx
   */
  reportTemplateId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DE9FFFE5-FCAD-4B24-9546-BF49273C562B
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

