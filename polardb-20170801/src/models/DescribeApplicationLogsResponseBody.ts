// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationLogsResponseBodyItemsLogRecords extends $dara.Model {
  componentName?: string;
  containerName?: string;
  content?: string;
  date?: string;
  fileLine?: string;
  fileName?: string;
  fullFilePath?: string;
  hostname?: string;
  logLevelId?: number;
  logLevelName?: string;
  method?: string;
  name?: string;
  runtime?: string;
  runtimeVersion?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'ComponentName',
      containerName: 'ContainerName',
      content: 'Content',
      date: 'Date',
      fileLine: 'FileLine',
      fileName: 'FileName',
      fullFilePath: 'FullFilePath',
      hostname: 'Hostname',
      logLevelId: 'LogLevelId',
      logLevelName: 'LogLevelName',
      method: 'Method',
      name: 'Name',
      runtime: 'Runtime',
      runtimeVersion: 'RuntimeVersion',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      containerName: 'string',
      content: 'string',
      date: 'string',
      fileLine: 'string',
      fileName: 'string',
      fullFilePath: 'string',
      hostname: 'string',
      logLevelId: 'number',
      logLevelName: 'string',
      method: 'string',
      name: 'string',
      runtime: 'string',
      runtimeVersion: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationLogsResponseBodyItems extends $dara.Model {
  logRecords?: DescribeApplicationLogsResponseBodyItemsLogRecords[];
  static names(): { [key: string]: string } {
    return {
      logRecords: 'LogRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRecords: { 'type': 'array', 'itemType': DescribeApplicationLogsResponseBodyItemsLogRecords },
    };
  }

  validate() {
    if(Array.isArray(this.logRecords)) {
      $dara.Model.validateArray(this.logRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * A container for the log data.
   */
  items?: DescribeApplicationLogsResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on the current page.
   * 
   * @example
   * 6
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CED079B7-A408-41A1-BFF1-EC608E******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 9
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      items: DescribeApplicationLogsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

