// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColdDataBasicInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of backup sets.
   * 
   * @example
   * 0
   */
  backupSetCount?: number;
  /**
   * @remarks
   * The data size of valid backup sets.
   * 
   * @example
   * 0
   */
  backupSetSpaceSize?: number;
  /**
   * @remarks
   * The underlying cloud storage service.
   * 
   * @example
   * aliyunOSS
   */
  cloudProduct?: string;
  /**
   * @remarks
   * The data size of cold storage.
   * 
   * @example
   * 0
   */
  currentSpaceSize?: number;
  /**
   * @remarks
   * The data redundancy type of cold storage. LRS indicates locally redundant storage.
   * 
   * @example
   * LRS
   */
  dataRedundancyType?: string;
  /**
   * @remarks
   * Indicates whether cold storage is enabled.
   */
  enableStatus?: boolean;
  /**
   * @remarks
   * The number of read accesses to cold data.
   * 
   * @example
   * 0
   */
  readAccessNum?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the storage volume.
   * 
   * @example
   * polardbx-oss-columnar-bucket-cn-hangzhou-1
   */
  volumeName?: string;
  /**
   * @remarks
   * The number of write accesses to cold data.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The details.
   */
  data?: DescribeColdDataBasicInfoResponseBodyData;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 1A6D328C-84B8-40DC-BF49-6C73984D7494
   */
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

