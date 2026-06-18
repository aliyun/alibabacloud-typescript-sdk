// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the connector. You can find this ID in the [Model Studio console](https://bailian.console.aliyun.com/cn-beijing/?tab=app#/connector/list).
   * 
   * @example
   * conn_file_xxxx
   */
  connectorId?: string;
  /**
   * @remarks
   * The name of the connector to query. An exact match is required.
   * 
   * @example
   * 连接器名称
   */
  connectorName?: string;
  static names(): { [key: string]: string } {
    return {
      connectorId: 'ConnectorId',
      connectorName: 'ConnectorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
      connectorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

