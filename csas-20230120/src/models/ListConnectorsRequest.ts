// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectorsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the connectors. You can enter up to 100 connector IDs.
   */
  connectorIds?: string[];
  /**
   * @remarks
   * The page number of the current page for paging in a paged query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the connector. The name must be 1 to 128 characters in length, and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * connector_name
   */
  name?: string;
  /**
   * @remarks
   * The Settings for the number of entries per page for paging in a paged query. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The connection status of the connector. Valid values:
   * - **Online**: online.
   * - **Offline**: offline.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The instance status of the connector. Valid values:
   * - **Enabled**: enabled.
   * - **Disabled**: shutdown.
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

