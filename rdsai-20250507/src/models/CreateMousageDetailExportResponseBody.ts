// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMOUsageDetailExportResponseBodyDataFilters extends $dara.Model {
  /**
   * @example
   * sk-***
   */
  apiKey?: string;
  /**
   * @example
   * 2025-03-10T02:02:20Z
   */
  endTime?: string;
  /**
   * @example
   * rds_copilot**_public_cn-******
   */
  instanceId?: string;
  /**
   * @example
   * qwen-flash
   */
  model?: string;
  /**
   * @example
   * 2026-03-05T16:00:00Z
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

export class CreateMOUsageDetailExportResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2026-03-15T21:18:45Z
   */
  completedAt?: string;
  /**
   * @example
   * 2026-03-15T21:14:45Z
   */
  createdAt?: string;
  /**
   * @example
   * http://***
   */
  downloadUrl?: string;
  /**
   * @example
   * picture owner error
   */
  errorMessage?: string;
  /**
   * @remarks
   * 下载 URL 失效时间（UTC ISO8601）
   * 
   * @example
   * 2026-02-07T21:14:45Z
   */
  expiresAt?: string;
  /**
   * @example
   * 403
   */
  fileSize?: number;
  filters?: CreateMOUsageDetailExportResponseBodyDataFilters;
  /**
   * @example
   * csv
   */
  format?: string;
  /**
   * @example
   * ddd6*****2a76
   */
  ossKey?: string;
  /**
   * @example
   * 100
   */
  rowCount?: number;
  /**
   * @remarks
   * pending / processing / completed / failed / expired
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
      ossKey: 'OssKey',
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
      filters: CreateMOUsageDetailExportResponseBodyDataFilters,
      format: 'string',
      ossKey: 'string',
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

export class CreateMOUsageDetailExportResponseBody extends $dara.Model {
  data?: CreateMOUsageDetailExportResponseBodyData;
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
      data: CreateMOUsageDetailExportResponseBodyData,
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

