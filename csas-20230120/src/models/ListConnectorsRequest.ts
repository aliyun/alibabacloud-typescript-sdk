// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectorsRequest extends $dara.Model {
  /**
   * @remarks
   * An array of up to 100 ConnectorIDs.
   */
  connectorIds?: string[];
  /**
   * @remarks
   * The number of the page to return. Valid values: 1 to 10,000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the connector. The name must be 1 to 128 characters long and can contain letters, Chinese characters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * connector_name
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 1,000.
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
   * 
   * - **Online**
   * 
   * - **Offline**
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The state of the connector instance. Valid values:
   * 
   * - **Enabled**
   * 
   * - **Disabled**
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

