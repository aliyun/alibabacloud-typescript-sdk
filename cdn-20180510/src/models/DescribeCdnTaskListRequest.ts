// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnTaskListRequest extends $dara.Model {
  /**
   * @example
   * 60.xx.xxx.38
   */
  clientIp?: string;
  /**
   * @example
   * f2xxx5
   */
  diagnoseId?: string;
  /**
   * @example
   * http://www.example.com
   */
  domainName?: string;
  /**
   * @example
   * 1644467126
   */
  endTime?: string;
  /**
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1644467126
   */
  startTime?: string;
  /**
   * @example
   * xxxxxxxxxx-x-x-xxxxxxxxxxxxxxxxx
   */
  taskId?: string;
  /**
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

