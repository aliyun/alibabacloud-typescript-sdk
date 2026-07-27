// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMOUsageDetailExportResponseBodyDataFilters extends $dara.Model {
  /**
   * @example
   * sk-rds-**
   */
  apiKey?: string;
  /**
   * @example
   * 2026-01-30T01:45:03Z
   */
  endTime?: string;
  /**
   * @example
   * rds_copilot**
   */
  instanceId?: string;
  /**
   * @example
   * glm-5
   */
  model?: string;
  /**
   * @example
   * 2026-01-28T01:45:03Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      model: 'Model',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      endTime: 'string',
      instanceId: 'string',
      model: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMOUsageDetailExportResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2026-02-01T01:50:03Z
   */
  completedAt?: string;
  /**
   * @example
   * 2026-02-01T01:45:03Z
   */
  createdAt?: string;
  /**
   * @remarks
   * OSS 预签名下载 URL；status=expired 时为 null
   * 
   * @example
   * http://***
   */
  downloadUrl?: string;
  /**
   * @example
   * tenant auth error
   */
  errorMessage?: string;
  /**
   * @remarks
   * 下载 URL 失效时间（UTC ISO8601）
   * 
   * @example
   * 2026-02-04T01:45:03Z
   */
  expiresAt?: string;
  /**
   * @example
   * 252
   */
  fileSize?: number;
  filters?: DescribeMOUsageDetailExportResponseBodyDataFilters;
  /**
   * @example
   * csv
   */
  format?: string;
  /**
   * @example
   * 1
   */
  rowCount?: number;
  /**
   * @remarks
   * none / pending / processing / completed / failed / expired
   * 
   * @example
   * pending / processing / completed / failed / expired
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      completedAt: 'CompletedAt',
      createdAt: 'CreatedAt',
      downloadUrl: 'DownloadUrl',
      errorMessage: 'ErrorMessage',
      expiresAt: 'ExpiresAt',
      fileSize: 'FileSize',
      filters: 'Filters',
      format: 'Format',
      rowCount: 'RowCount',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedAt: 'string',
      createdAt: 'string',
      downloadUrl: 'string',
      errorMessage: 'string',
      expiresAt: 'string',
      fileSize: 'number',
      filters: DescribeMOUsageDetailExportResponseBodyDataFilters,
      format: 'string',
      rowCount: 'number',
      status: 'string',
    };
  }

  validate() {
    if(this.filters && typeof (this.filters as any).validate === 'function') {
      (this.filters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMOUsageDetailExportResponseBody extends $dara.Model {
  data?: DescribeMOUsageDetailExportResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeMOUsageDetailExportResponseBodyData,
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

