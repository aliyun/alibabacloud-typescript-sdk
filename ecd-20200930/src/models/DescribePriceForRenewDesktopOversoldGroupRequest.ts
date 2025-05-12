// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceForRenewDesktopOversoldGroupRequest extends $dara.Model {
  oversoldGroupId?: string;
  period?: number;
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      oversoldGroupId: 'OversoldGroupId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oversoldGroupId: 'string',
      period: 'number',
      periodUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

