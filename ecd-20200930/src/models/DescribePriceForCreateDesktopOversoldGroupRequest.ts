// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceForCreateDesktopOversoldGroupRequest extends $dara.Model {
  concurrenceCount?: number;
  dataDiskSize?: number;
  desktopType?: string;
  oversoldUserCount?: number;
  period?: number;
  periodUnit?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      concurrenceCount: 'ConcurrenceCount',
      dataDiskSize: 'DataDiskSize',
      desktopType: 'DesktopType',
      oversoldUserCount: 'OversoldUserCount',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrenceCount: 'number',
      dataDiskSize: 'number',
      desktopType: 'string',
      oversoldUserCount: 'number',
      period: 'number',
      periodUnit: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

