// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommissionDetailFileListResponseBodyDataFileList extends $dara.Model {
  /**
   * @remarks
   * The push status of the OSS file. Valid values: Processing, Succeeded, or Failed.
   * 
   * @example
   * Processing
   */
  bucketSyncStatus?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * The policy name. For more information, see the APS commission query and download feature.
   */
  commissionPolicyName?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * Commission202502021112
   */
  fileName?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * Distributor policies are used to expand channels, and standard policies are used to acquire customers.
   */
  fileType?: string;
  /**
   * @remarks
   * The file URL.
   * 
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

export class GetCommissionDetailFileListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The billing month.
   * 
   * @example
   * 202502
   */
  billMonth?: string;
  /**
   * @remarks
   * The file list.
   */
  fileList?: GetCommissionDetailFileListResponseBodyDataFileList[];
  /**
   * @remarks
   * The UID of the partner.
   * 
   * @example
   * 1112332432
   */
  partnerUid?: string;
  static names(): { [key: string]: string } {
    return {
      billMonth: 'BillMonth',
      fileList: 'FileList',
      partnerUid: 'PartnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billMonth: 'string',
      fileList: { 'type': 'array', 'itemType': GetCommissionDetailFileListResponseBodyDataFileList },
      partnerUid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileList)) {
      $dara.Model.validateArray(this.fileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommissionDetailFileListResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetCommissionDetailFileListResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCommissionDetailFileListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

