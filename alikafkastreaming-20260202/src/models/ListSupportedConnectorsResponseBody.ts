// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupportedConnectorsResponseBodyData extends $dara.Model {
  connector?: string;
  description?: string;
  iconUrl?: string;
  name?: string;
  sinkSql?: string;
  sourceSql?: string;
  static names(): { [key: string]: string } {
    return {
      connector: 'Connector',
      description: 'Description',
      iconUrl: 'IconUrl',
      name: 'Name',
      sinkSql: 'SinkSql',
      sourceSql: 'SourceSql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connector: 'string',
      description: 'string',
      iconUrl: 'string',
      name: 'string',
      sinkSql: 'string',
      sourceSql: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportedConnectorsResponseBody extends $dara.Model {
  code?: number;
  data?: ListSupportedConnectorsResponseBodyData[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListSupportedConnectorsResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

