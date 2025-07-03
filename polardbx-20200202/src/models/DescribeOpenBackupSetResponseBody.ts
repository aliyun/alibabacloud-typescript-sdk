// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenBackupSetResponseBody extends $dara.Model {
  /**
   * @example
   * {"gmsBackupSet": {"pubFullDownloadUrl": "https://xxxxx","dnName": "pxc-xdb-m-xxxxxx","hostInstanceId": 0001,"binlogs": [],"backupEndTime": "2024-10-21T10:11:56Z","backupLinkExpiredTime": "2024-10-23T06:13:54Z","dnBackupSetId": "00088","notCompletedBinlogs": [],"commitIndex": "15249275","innerFullDownloadUrl": "http://xxxxx","backupStartTime": "2024-10-21T10:09:20Z","backupSetSize": 526118912},"dnBackupSets": [],"insName": "pxc-xxxxx","backupSetId": "cb-xxxxx","canBinlogRecoverToTime": 1729567925000,"backupEndTime": "2024-10-21T10:12:16Z","canBinlogRecoverToTimeUTC": "2024-10-22T03:32:05Z","canBackupMinRecoverToTimeUTC": "2024-10-21T10:11:56Z","pitrInvalid": false,"backupStartTime": "2024-10-21T10:09:16Z","canBackupMinRecoverToTime": 1729505516000}
   */
  data?: any;
  /**
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
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
      data: 'any',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

