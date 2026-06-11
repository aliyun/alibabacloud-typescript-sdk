// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommissionDetailFileListResponseBodyDataFileList extends $dara.Model {
  /**
   * @remarks
   * OSS file push status: Processing, Succeeded, or failed
   * 
   * @example
   * 处理中
   */
  bucketSyncStatus?: string;
  /**
   * @remarks
   * Policy name
   * 
   * @example
   * 参考【APS佣金查询下载功能】的政策名称
   */
  commissionPolicyName?: string;
  /**
   * @remarks
   * File name
   * 
   * @example
   * 佣金202502021112
   */
  fileName?: string;
  /**
   * @remarks
   * File type
   * 
   * @example
   * 总代政策为拓渠、普通政策为拓客
   */
  fileType?: string;
  /**
   * @remarks
   * File URL
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
   * Bill month
   * 
   * @example
   * 202502
   */
  billMonth?: string;
  /**
   * @remarks
   * File list
   */
  fileList?: GetCommissionDetailFileListResponseBodyDataFileList[];
  /**
   * @remarks
   * Partner UID
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
   * Returned data
   */
  data?: GetCommissionDetailFileListResponseBodyData;
  /**
   * @remarks
   * Message
   * 
   * @example
   * 成功
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
   * Indicates whether the invocation succeeded.
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

