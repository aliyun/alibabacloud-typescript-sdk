// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectorResponseBody extends $dara.Model {
  /**
   * @example
   * [\\"field1\\",\\"field2\\"]
   */
  columnFields?: string;
  /**
   * @example
   * {\\"TimestampUnit\\":\\"MICROSECOND\\",\\"PartitionConfig\\":{\\"hh\\":\\"%H\\",\\"mm\\":\\"%M\\",\\"ds\\":\\"%Y%m%d\\"},\\"Project\\":\\"xxx\\",\\"TimeRange\\":15,\\"TimeZone\\":\\"Asia/Shanghai\\",\\"Table\\":\\"xxx\\",\\"OdpsEndpoint\\":\\"xxx\\",\\"AccessId\\":\\"xxx\\",\\"PartitionMode\\":\\"SYSTEM_TIME\\",\\"AuthMode\\":\\"ak\\"}
   */
  config?: string;
  /**
   * @example
   * c5e07a96-5069-4486-87c3-0d281951f772
   */
  connectorId?: string;
  /**
   * @example
   * 1724041098000
   */
  createTime?: string;
  /**
   * @example
   * 270523390948438349
   */
  creator?: string;
  /**
   * @example
   * 2025-06-06 15:45:00
   */
  doneTime?: string;
  /**
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @example
   * A20A7093-8FE0-058C-BE0C-3C8057D5F1A1
   */
  requestId?: string;
  /**
   * @example
   * RUNNING
   */
  state?: string;
  /**
   * @example
   * 1764123132492KO88A
   */
  subscriptionId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * test_topic
   */
  topicName?: string;
  /**
   * @example
   * SINK_ODPS
   */
  type?: string;
  /**
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

