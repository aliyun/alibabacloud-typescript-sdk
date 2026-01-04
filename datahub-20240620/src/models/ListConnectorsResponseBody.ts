// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ListConnectorsResponseBodyListConnector extends $dara.Model {
  /**
   * @example
   * [\\"field1\\",\\"field2\\"]
   */
  columnFields?: string;
  /**
   * @example
   * {\\"Table\\":\\"r3\\",\\"Endpoint\\":\\"https://Device-data.cn-beijing.ots-internal.aliyuncs.com\\",\\"Instance\\":\\"Device-data\\",\\"WriteMode\\":\\"PUT\\",\\"AuthMode\\":\\"STS\\"}
   */
  config?: string;
  /**
   * @example
   * fa44384c-0ac5-4d3e-8acd-76e18636ab10
   */
  connectorId?: string;
  /**
   * @example
   * 1724041098000
   */
  createTime?: string;
  /**
   * @example
   * 1696648921408952
   */
  creator?: string;
  /**
   * @example
   * 2025-12-04 16:45:00
   */
  doneTime?: string;
  /**
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @example
   * RUNNING
   */
  state?: string;
  /**
   * @example
   * 1745824636429WZ2EE
   */
  subscriptionId?: string;
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
   * 1708171905000
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
      state: 'State',
      subscriptionId: 'SubscriptionId',
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
      state: 'string',
      subscriptionId: 'string',
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

export class ListConnectorsResponseBodyList extends $dara.Model {
  connector?: ListConnectorsResponseBodyListConnector[];
  static names(): { [key: string]: string } {
    return {
      connector: 'Connector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connector: { 'type': 'array', 'itemType': ListConnectorsResponseBodyListConnector },
    };
  }

  validate() {
    if(Array.isArray(this.connector)) {
      $dara.Model.validateArray(this.connector);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBody extends $dara.Model {
  list?: ListConnectorsResponseBodyList;
  /**
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @example
   * 9892074a2a89600ae4b0d5a34fb99a3f
   */
  nextToken?: string;
  /**
   * @example
   * A20A7093-8FE0-058C-BE0C-3C8057D5F1A1
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListConnectorsResponseBodyList,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

