// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTraceTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 60.xx.xxx.38
   */
  clientIp?: string;
  /**
   * @remarks
   * The diagnose ID.
   * 
   * @example
   * f2xxx5
   */
  diagnoseId?: string;
  /**
   * @remarks
   * The domain name to diagnose.
   * 
   * @example
   * http://www.example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. Time zone: UTC/GMT.
   * 
   * @example
   * 2006-01-02T15:04:05Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Valid values: any integer from 1 to 1000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time. Time zone: UTC/GMT.
   * 
   * @example
   * 2006-01-02T15:04:05Z
   */
  startTime?: string;
  /**
   * @remarks
   * The diagnostic task ID.
   * 
   * @example
   * xxxxxxxxxx-x-x-xxxxxxxxxxxxxxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The diagnostic trace ID.
   * 
   * @example
   * 000000xxxxxxxxxxxxxxxxxxxxxx33427e
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      diagnoseId: 'DiagnoseId',
      domainName: 'DomainName',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      diagnoseId: 'string',
      domainName: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

