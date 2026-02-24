// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerReportSendRequest extends $dara.Model {
  /**
   * @remarks
   * The report template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crt-xxx
   */
  reportTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      reportTemplateId: 'ReportTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

