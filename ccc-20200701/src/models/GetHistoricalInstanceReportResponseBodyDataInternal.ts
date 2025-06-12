// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoricalInstanceReportResponseBodyDataInternal extends $dara.Model {
  callsAnswered?: number;
  callsDialed?: number;
  static names(): { [key: string]: string } {
    return {
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callsAnswered: 'number',
      callsDialed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

