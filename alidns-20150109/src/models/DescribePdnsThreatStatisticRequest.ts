// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsThreatStatisticRequest extends $dara.Model {
  endDate?: string;
  lang?: string;
  startDate?: string;
  threatSourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      lang: 'Lang',
      startDate: 'StartDate',
      threatSourceIp: 'ThreatSourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      lang: 'string',
      startDate: 'string',
      threatSourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

