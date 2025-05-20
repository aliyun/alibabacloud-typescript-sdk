// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErrorRequestSampleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testdb01
   */
  dbName?: string;
  /**
   * @remarks
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The end time must be later than the start time. The interval cannot exceed 24 hours.
   * 
   * @example
   * 1642566830000
   */
  end?: number;
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
   * >  You must specify the node ID if your database instance is a PolarDB for MySQL cluster.
   * 
   * @example
   * pi-bp179lg03445l****
   */
  nodeId?: string;
  /**
   * @remarks
   * The SQL query ID. You can call the [GetAsyncErrorRequestListByCode](https://help.aliyun.com/document_detail/410746.html) operation to query the ID of the SQL query for which MySQL error code is returned.
   * 
   * @example
   * 2cd4432556c3dab9d825ba363637****
   */
  sqlId?: string;
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
      dbName: 'DbName',
      end: 'End',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      sqlId: 'SqlId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      end: 'number',
      instanceId: 'string',
      nodeId: 'string',
      sqlId: 'string',
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

