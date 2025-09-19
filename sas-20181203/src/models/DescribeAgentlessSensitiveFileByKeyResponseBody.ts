// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgentlessSensitiveFileByKeyResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAgentlessSensitiveFileByKeyResponseBodySensitiveFileList extends $dara.Model {
  /**
   * @remarks
   * The path to the sensitive file.
   * 
   * @example
   * /usr/lib/abc.txt
   */
  filePath?: string;
  /**
   * @remarks
   * The timestamp when the first scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1663321552000
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The ID of the alert for the sensitive file.
   * 
   * @example
   * 423505573
   */
  id?: number;
  /**
   * @remarks
   * The instance name of the asset.
   * 
   * @example
   * test-server
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the asset.
   * 
   * @example
   * 95.214.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the asset.
   * 
   * @example
   * 10.68.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The timestamp when the last scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1663691592000
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The MD5 hash value of the sensitive file.
   * 
   * @example
   * b484b0dff093f358897486b58266****
   */
  md5?: string;
  /**
   * @remarks
   * The content of the sensitive file.
   * 
   * @example
   * mysql -u -p****
   */
  prompt?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The type of the sensitive file.
   * 
   * @example
   * pem
   */
  sensitiveFileKey?: string;
  /**
   * @remarks
   * The status of the sensitive file. Valid values:
   * 
   * *   **0**: unhandled.
   * *   **1**: ignored.
   * *   **2**: false positive.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * SAS_Agentless_171869952****
   */
  targetName?: string;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * 73e6a851-e63b-49ef-9d7a-5542d765****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      firstScanTime: 'FirstScanTime',
      id: 'Id',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lastScanTime: 'LastScanTime',
      md5: 'Md5',
      prompt: 'Prompt',
      riskLevel: 'RiskLevel',
      sensitiveFileKey: 'SensitiveFileKey',
      status: 'Status',
      targetName: 'TargetName',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      firstScanTime: 'number',
      id: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      lastScanTime: 'number',
      md5: 'string',
      prompt: 'string',
      riskLevel: 'string',
      sensitiveFileKey: 'string',
      status: 'number',
      targetName: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAgentlessSensitiveFileByKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeAgentlessSensitiveFileByKeyResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FBBEB173-1F43-505F-A876-C03ECDF6CE4C
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the sensitive files that are detected by using the agentless detection feature.
   */
  sensitiveFileList?: DescribeAgentlessSensitiveFileByKeyResponseBodySensitiveFileList[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      sensitiveFileList: 'SensitiveFileList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeAgentlessSensitiveFileByKeyResponseBodyPageInfo,
      requestId: 'string',
      sensitiveFileList: { 'type': 'array', 'itemType': DescribeAgentlessSensitiveFileByKeyResponseBodySensitiveFileList },
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.sensitiveFileList)) {
      $dara.Model.validateArray(this.sensitiveFileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

