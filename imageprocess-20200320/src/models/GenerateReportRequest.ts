// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GenerateReportRequestReportConfigs } from "./GenerateReportRequestReportConfigs";


export class GenerateReportRequest extends $dara.Model {
  reportConfigs?: GenerateReportRequestReportConfigs[];
  static names(): { [key: string]: string } {
    return {
      reportConfigs: 'ReportConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportConfigs: { 'type': 'array', 'itemType': GenerateReportRequestReportConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.reportConfigs)) {
      $dara.Model.validateArray(this.reportConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

