// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKvUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The request method. If the parameter is empty, data about all methods is returned. Valid values:
   * 
   * *   **get**
   * *   **put**
   * *   **list**
   * *   **delete**
   * 
   * @example
   * get
   */
  accessType?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-08-10T23:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The type of the request data. Set the value to **acc**.
   * 
   * This parameter is required.
   * 
   * @example
   * acc
   */
  field?: string;
  /**
   * @remarks
   * The namespace ID. If the parameter is empty, data about all namespaces is returned.
   * 
   * You can specify a maximum number of 30 namespace IDs and separate them with commas (,).
   * 
   * @example
   * 12423131231****
   */
  namespaceId?: string;
  /**
   * @remarks
   * The type of the response data. Valid values:
   * 
   * *   **detail**: detailed data
   * *   **total**: summary data
   * 
   * Default value: **detail**.
   * 
   * @example
   * detail
   */
  responseType?: string;
  /**
   * @remarks
   * The key that is used to group data. Valid values: **type** and **namespace**.
   * 
   * *   **type**: Data is grouped by time. The data in the last 5 minutes is returned.
   * *   **namespace**: Data is grouped by namespace and is not padded with zeros.
   * *   Default value: **type**.
   * 
   * If **ResponseType** is set to **total**, data to return is not grouped by **namespace** but by **type**.
   * 
   * @example
   * type
   */
  splitBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * The minimum data granularity is 1 hour. If you do not specify this parameter, the data in the last seven days is returned.
   * 
   * @example
   * 2022-08-10T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      endTime: 'EndTime',
      field: 'Field',
      namespaceId: 'NamespaceId',
      responseType: 'ResponseType',
      splitBy: 'SplitBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      endTime: 'string',
      field: 'string',
      namespaceId: 'string',
      responseType: 'string',
      splitBy: 'string',
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

