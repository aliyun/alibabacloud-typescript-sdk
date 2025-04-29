// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiskMonitorDataResponseBodyMonitorDataDiskMonitorData } from "./DescribeDiskMonitorDataResponseBodyMonitorDataDiskMonitorData";


export class DescribeDiskMonitorDataResponseBodyMonitorData extends $dara.Model {
  diskMonitorData?: DescribeDiskMonitorDataResponseBodyMonitorDataDiskMonitorData[];
  static names(): { [key: string]: string } {
    return {
      diskMonitorData: 'DiskMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskMonitorData: { 'type': 'array', 'itemType': DescribeDiskMonitorDataResponseBodyMonitorDataDiskMonitorData },
    };
  }

  validate() {
    if(Array.isArray(this.diskMonitorData)) {
      $dara.Model.validateArray(this.diskMonitorData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

