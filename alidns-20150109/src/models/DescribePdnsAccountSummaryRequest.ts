// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsAccountSummaryRequest extends $dara.Model {
  endDate?: string;
  lang?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      lang: 'Lang',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      lang: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

