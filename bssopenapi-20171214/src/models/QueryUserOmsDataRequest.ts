// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserOmsDataRequest extends $dara.Model {
  /**
   * @remarks
   * The time type of the usage data. Set the parameter based on the description in the documentation of the specified service. Valid values:
   * 
   * *   Raw
   * *   Hour
   * *   Day
   * *   Month
   * 
   * This parameter is required.
   * 
   * @example
   * Hour
   */
  dataType?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-02-21T12:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the record from which the usage data starts to return. The usage data records whose names are alphabetically after the value of the Marker parameter are returned. By default, the usage data starts to return from the earliest record.
   * 
   * @example
   * NextToken
   */
  marker?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 200. Default value: 100.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-02-20T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The service whose usage data you want to query and the details of the usage data. The parameter value is usually set to the code of a service. Various usage models are provided for different services.
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      endTime: 'EndTime',
      marker: 'Marker',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      endTime: 'string',
      marker: 'string',
      ownerId: 'number',
      pageSize: 'number',
      startTime: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

