// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListReportDefinitionsResponseBodyReportDefinitions } from "./ListReportDefinitionsResponseBodyReportDefinitions";


export class ListReportDefinitionsResponseBody extends $dara.Model {
  metadata?: any;
  reportDefinitions?: ListReportDefinitionsResponseBodyReportDefinitions[];
  /**
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      reportDefinitions: 'ReportDefinitions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'any',
      reportDefinitions: { 'type': 'array', 'itemType': ListReportDefinitionsResponseBodyReportDefinitions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reportDefinitions)) {
      $dara.Model.validateArray(this.reportDefinitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

