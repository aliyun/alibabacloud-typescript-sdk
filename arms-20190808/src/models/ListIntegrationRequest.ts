// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert integration.
   * 
   * @example
   * CloudMonitor integration
   */
  integrationName?: string;
  /**
   * @remarks
   * The type of the alert integration. Valid values:
   * 
   * *   CLOUD_MONITOR: CloudMonitor
   * *   LOG_SERVICE: Log Service
   * 
   * This parameter is required.
   * 
   * @example
   * CLOUD_MONITOR
   */
  integrationProductType?: string;
  /**
   * @remarks
   * Specifies whether to display the details of each alert integration:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isDetail?: boolean;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of alert integrations to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      integrationName: 'IntegrationName',
      integrationProductType: 'IntegrationProductType',
      isDetail: 'IsDetail',
      page: 'Page',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integrationName: 'string',
      integrationProductType: 'string',
      isDetail: 'boolean',
      page: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

