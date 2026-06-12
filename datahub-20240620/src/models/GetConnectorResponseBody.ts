// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of fields for the synchronization task.
   * 
   * @example
   * [\\"field1\\",\\"field2\\"]
   */
  columnFields?: string;
  /**
   * @remarks
   * The configuration information of the synchronization task.
   * 
   * @example
   * {\\"TimestampUnit\\":\\"MICROSECOND\\",\\"PartitionConfig\\":{\\"hh\\":\\"%H\\",\\"mm\\":\\"%M\\",\\"ds\\":\\"%Y%m%d\\"},\\"Project\\":\\"xxx\\",\\"TimeRange\\":15,\\"TimeZone\\":\\"Asia/Shanghai\\",\\"Table\\":\\"xxx\\",\\"OdpsEndpoint\\":\\"xxx\\",\\"AccessId\\":\\"xxx\\",\\"PartitionMode\\":\\"SYSTEM_TIME\\",\\"AuthMode\\":\\"ak\\"}
   */
  config?: string;
  /**
   * @remarks
   * The synchronization task ID.
   * 
   * @example
   * c5e07a96-5069-4486-87c3-0d281951f772
   */
  connectorId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1724041098000
   */
  createTime?: string;
  /**
   * @remarks
   * The creator of the synchronization task.
   * 
   * @example
   * 270523390948438349
   */
  creator?: string;
  /**
   * @remarks
   * The time when the synchronization task is marked as done. This parameter takes effect only for ODPS synchronization (SINK_ODPS) tasks.
   * 
   * @example
   * 2025-06-06 15:45:00
   */
  doneTime?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A20A7093-8FE0-058C-BE0C-3C8057D5F1A1
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the synchronization task.
   * 
   * @example
   * RUNNING
   */
  state?: string;
  /**
   * @remarks
   * The subscription ID.
   * 
   * @example
   * 1764123132492KO88A
   */
  subscriptionId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * test_topic
   */
  topicName?: string;
  /**
   * @remarks
   * The type of the synchronization task.
   * 
   * @example
   * SINK_ODPS
   */
  type?: string;
  /**
   * @remarks
   * The last update time.
   * 
   * @example
   * 1724041098000
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      columnFields: 'ColumnFields',
      config: 'Config',
      connectorId: 'ConnectorId',
      createTime: 'CreateTime',
      creator: 'Creator',
      doneTime: 'DoneTime',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      state: 'State',
      subscriptionId: 'SubscriptionId',
      success: 'Success',
      topicName: 'TopicName',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnFields: 'string',
      config: 'string',
      connectorId: 'string',
      createTime: 'string',
      creator: 'string',
      doneTime: 'string',
      projectName: 'string',
      requestId: 'string',
      state: 'string',
      subscriptionId: 'string',
      success: 'boolean',
      topicName: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

