// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColdDataBasicInfoResponseBodyData extends $dara.Model {
  backupSetCount?: number;
  backupSetSpaceSize?: number;
  cloudProduct?: string;
  currentSpaceSize?: number;
  dataRedundancyType?: string;
  enableStatus?: boolean;
  readAccessNum?: number;
  regionId?: string;
  volumeName?: string;
  writeAccessNum?: number;
  static names(): { [key: string]: string } {
    return {
      backupSetCount: 'BackupSetCount',
      backupSetSpaceSize: 'BackupSetSpaceSize',
      cloudProduct: 'CloudProduct',
      currentSpaceSize: 'CurrentSpaceSize',
      dataRedundancyType: 'DataRedundancyType',
      enableStatus: 'EnableStatus',
      readAccessNum: 'ReadAccessNum',
      regionId: 'RegionId',
      volumeName: 'VolumeName',
      writeAccessNum: 'WriteAccessNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetCount: 'number',
      backupSetSpaceSize: 'number',
      cloudProduct: 'string',
      currentSpaceSize: 'number',
      dataRedundancyType: 'string',
      enableStatus: 'boolean',
      readAccessNum: 'number',
      regionId: 'string',
      volumeName: 'string',
      writeAccessNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColdDataBasicInfoResponseBody extends $dara.Model {
  data?: DescribeColdDataBasicInfoResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeColdDataBasicInfoResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

