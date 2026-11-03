// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMOUsageDetailExportResponseBodyDataFilters extends $dara.Model {
  /**
   * @remarks
   * The API key that is used.
   * 
   * @example
   * sk-rds-**
   */
  apiKey?: string;
  /**
   * @remarks
   * The end time of the instance in ISO 8601 format. The interval between EndTime and StartTime cannot exceed 30 days.
   * 
   * @example
   * 2026-01-30T01:45:03Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * rds_copilot**
   */
  instanceId?: string;
  /**
   * @remarks
   * The model that is called.
   * 
   * @example
   * glm-5
   */
  model?: string;
  /**
   * @remarks
   * The start time of the instance in ISO 8601 format.
   * 
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
   * @remarks
   * The completion time.
   * 
   * @example
   * 2026-02-01T01:50:03Z
   */
  completedAt?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-02-01T01:45:03Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The download URL.
   * 
   * @example
   * http://***
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The error message. Read this message to determine the error when the final value of Status is not SUCCESSED.
   * 
   * @example
   * tenant auth error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The expiration time in ISO 8601 format.
   * 
   * @example
   * 2026-02-04T01:45:03Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The total size of the source backup file.
   * 
   * @example
   * 252
   */
  fileSize?: number;
  /**
   * @remarks
   * The query filter conditions.
   */
  filters?: DescribeMOUsageDetailExportResponseBodyDataFilters;
  /**
   * @remarks
   * The target conversion format.
   * 
   * @example
   * csv
   */
  format?: string;
  /**
   * @remarks
   * The total number of data rows.
   * 
   * @example
   * 1
   */
  rowCount?: number;
  /**
   * @remarks
   * The module status.
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
  /**
   * @remarks
   * The result.
   */
  data?: DescribeMOUsageDetailExportResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
  /**
   * @remarks
   * The request result.
   * 
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

