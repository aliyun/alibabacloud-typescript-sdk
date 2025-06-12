// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoricalInstanceReportResponseBodyDataInboundAccessChannelTypeDetailList extends $dara.Model {
  accessChannelType?: string;
  callsOffered?: number;
  static names(): { [key: string]: string } {
    return {
      accessChannelType: 'AccessChannelType',
      callsOffered: 'CallsOffered',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelType: 'string',
      callsOffered: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

