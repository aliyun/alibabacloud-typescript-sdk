// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectorsResponseBodyListConnector extends $dara.Model {
  columnFields?: string;
  config?: string;
  connectorId?: string;
  createTime?: string;
  creator?: string;
  doneTime?: string;
  projectName?: string;
  state?: string;
  subscriptionId?: string;
  topicName?: string;
  type?: string;
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

