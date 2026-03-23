// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCDiskSpecRequest extends $dara.Model {
  autoPay?: boolean;
  diskCategory?: string;
  diskId?: string;
  dryRun?: boolean;
  performanceLevel?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      diskCategory: 'DiskCategory',
      diskId: 'DiskId',
      dryRun: 'DryRun',
      performanceLevel: 'PerformanceLevel',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      diskCategory: 'string',
      diskId: 'string',
      dryRun: 'boolean',
      performanceLevel: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

