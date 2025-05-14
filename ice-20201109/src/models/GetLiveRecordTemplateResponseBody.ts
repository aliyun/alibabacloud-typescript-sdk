// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLiveRecordTemplateResponseBodyRecordTemplate } from "./GetLiveRecordTemplateResponseBodyRecordTemplate";


export class GetLiveRecordTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The recording template.
   */
  recordTemplate?: GetLiveRecordTemplateResponseBodyRecordTemplate;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C892855F-95DF-50D6-A28C-279ABDB76810
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordTemplate: 'RecordTemplate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordTemplate: GetLiveRecordTemplateResponseBodyRecordTemplate,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordTemplate && typeof (this.recordTemplate as any).validate === 'function') {
      (this.recordTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

