// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectorsRequest extends $dara.Model {
  /**
   * @remarks
   * Collection of ConnectorIDs. Up to 100 ConnectorIDs can be entered.
   */
  connectorIds?: string[];
  /**
   * @remarks
   * The page number of the current page in a paginated query. Value: 1~10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Connector name. Length: 1~128 characters, supporting Chinese and uppercase/lowercase English letters, and can include numbers, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * connector_name
   */
  name?: string;
  /**
   * @remarks
   * The number of items per page in a paginated query. Value: 1~1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Connector connection status. Values:
   * - **Online**: Online.
   * - **Offline**: Offline.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * Connector instance status. Values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  switchStatus?: string;
  static names(): { [key: string]: string } {
    return {
      connectorIds: 'ConnectorIds',
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      status: 'Status',
      switchStatus: 'SwitchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorIds: { 'type': 'array', 'itemType': 'string' },
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      status: 'string',
      switchStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connectorIds)) {
      $dara.Model.validateArray(this.connectorIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

