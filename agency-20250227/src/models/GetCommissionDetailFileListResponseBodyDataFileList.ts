// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommissionDetailFileListResponseBodyDataFileList extends $dara.Model {
  bucketSyncStatus?: string;
  commissionPolicyName?: string;
  fileName?: string;
  fileType?: string;
  /**
   * @example
   * aps.ailyun.com/file/download?resourceId=1234&type=1
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      bucketSyncStatus: 'BucketSyncStatus',
      commissionPolicyName: 'CommissionPolicyName',
      fileName: 'FileName',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketSyncStatus: 'string',
      commissionPolicyName: 'string',
      fileName: 'string',
      fileType: 'string',
      fileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

