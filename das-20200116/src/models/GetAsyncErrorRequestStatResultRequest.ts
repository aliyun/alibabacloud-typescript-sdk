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
   * The end time of the query, specified as a Unix timestamp in milliseconds.
   * 
   * > The end time must be later than the start time. The interval between the start time and the end time cannot exceed 1 day.
   * 
   * @example
   * 1642566830000
   */
  end?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * > This parameter is required for PolarDB for MySQL instances.
   * 
   * @example
   * pi-bp179lg03445l****
   */
  nodeId?: string;
  /**
   * @remarks
   * One or more SQL IDs. Separate multiple SQL IDs with commas. You can call the [GetAsyncErrorRequestListByCode](https://help.aliyun.com/document_detail/410746.html) operation to query the SQL IDs that generated MySQL error codes on the instance.
   * 
   * @example
   * ad78a4e7d3ce81590c9dc2d5f4bc****,0f92feacd92c048b06a16617a633****
   */
  sqlIdList?: string;
  /**
   * @remarks
   * The start time of the query, specified as a Unix timestamp in milliseconds.
   * 
   * > The start time must be within the data retention period of SQL Explorer for the database instance. The start time cannot be earlier than 90 days before the current time.
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

