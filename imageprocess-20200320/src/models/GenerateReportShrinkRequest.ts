// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateReportShrinkRequest extends $dara.Model {
  reportConfigsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      reportConfigsShrink: 'ReportConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportConfigsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

