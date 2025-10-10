// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Hugepage extends $dara.Model {
  khugepagedAllocSleepMillisecs?: number;
  khugepagedDefrag?: number;
  khugepagedPagesToScan?: number;
  khugepagedScanSleepMillisecs?: number;
  transparentDefrag?: string;
  transparentEnabled?: string;
  static names(): { [key: string]: string } {
    return {
      khugepagedAllocSleepMillisecs: 'khugepagedAllocSleepMillisecs',
      khugepagedDefrag: 'khugepagedDefrag',
      khugepagedPagesToScan: 'khugepagedPagesToScan',
      khugepagedScanSleepMillisecs: 'khugepagedScanSleepMillisecs',
      transparentDefrag: 'transparentDefrag',
      transparentEnabled: 'transparentEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      khugepagedAllocSleepMillisecs: 'number',
      khugepagedDefrag: 'number',
      khugepagedPagesToScan: 'number',
      khugepagedScanSleepMillisecs: 'number',
      transparentDefrag: 'string',
      transparentEnabled: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

