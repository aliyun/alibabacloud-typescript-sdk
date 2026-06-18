// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIntlCommissionDetailFileListResponseBodyDataFileList extends $dara.Model {
  /**
   * @remarks
   * The push status of the OSS file. Valid values:
   * - 初始化状态: initialization status
   * - 处理中: processing
   * - 处理成功: processing succeeded
   * - 处理失败: processing failed.
   * 
   * @example
   * 处理中
   */
  bucketSyncStatus?: string;
  /**
   * @remarks
   * The commission policy name.
   * 
   * @example
   * 参考【APS佣金查询下载功能】的政策名称
   */
  commissionPolicyName?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * 202606_FY27_TEST_4397912340.xlsx
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      bucketSyncStatus: 'BucketSyncStatus',
      commissionPolicyName: 'CommissionPolicyName',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketSyncStatus: 'string',
      commissionPolicyName: 'string',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntlCommissionDetailFileListResponseBodyData extends $dara.Model {
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
   * The file list object.
   */
  fileList?: GetIntlCommissionDetailFileListResponseBodyDataFileList[];
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
      fileList: { 'type': 'array', 'itemType': GetIntlCommissionDetailFileListResponseBodyDataFileList },
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

export class GetIntlCommissionDetailFileListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: GetIntlCommissionDetailFileListResponseBodyData;
  /**
   * @remarks
   * The message information.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * 2103a30617045934095083027d88c5
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
      data: GetIntlCommissionDetailFileListResponseBodyData,
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

