// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncErrorRequestStatResultRequest extends $dara.Model {
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
   * >  The end time must be later than the start time. The interval between the start time and the end time cannot exceed 24 hours.
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
   * >  This parameter must be specified for PolarDB for MySQL instances.
   * 
   * @example
   * pi-bp179lg03445l****
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the SQL template. Separate multiple SQL IDs with commas (,). You can call the [GetAsyncErrorRequestListByCode](https://help.aliyun.com/document_detail/410746.html) operation to query the ID of the SQL query for which MySQL error code is returned.
   * 
   * @example
   * ad78a4e7d3ce81590c9dc2d5f4bc****,0f92feacd92c048b06a16617a633****
   */
  sqlIdList?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The beginning of the time range to query must be within the storage duration of the database instance and can be up to 90 days earlier than the current time.
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
      sqlIdList: 'SqlIdList',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      end: 'number',
      instanceId: 'string',
      nodeId: 'string',
      sqlIdList: 'string',
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

