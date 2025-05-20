// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncErrorRequestListByCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The end time must be later than the start time. The interval between the start time and the end time cannot exceed 24 hours.
   * 
   * @example
   * 1642566830000
   */
  end?: number;
  /**
   * @remarks
   * The error code. You can call the [GetAsyncErrorRequestStatByCode](https://help.aliyun.com/document_detail/409804.html) operation to query the MySQL error codes that may be generated in the SQL Explorer results of an instance.
   * 
   * @example
   * 1064
   */
  errorCode?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * >  This parameter must be specified if the database instance is a PolarDB for MySQL cluster.
   * 
   * @example
   * pi-wz9s658475e58****
   */
  nodeId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The start time must be within the storage duration of the SQL Explorer feature of the database instance, and can be up to 90 days earlier than the current time.
   * 
   * @example
   * 1642556990714
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      errorCode: 'ErrorCode',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      errorCode: 'string',
      instanceId: 'string',
      nodeId: 'string',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

