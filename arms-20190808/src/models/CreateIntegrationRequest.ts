// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntegrationRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically clear alert events. Default value: true. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  autoRecover?: boolean;
  /**
   * @remarks
   * The description of the alert integration.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The name of the alert integration.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudMonitor integration
   */
  integrationName?: string;
  /**
   * @remarks
   * The service of the alert integration. Valid values:
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
   * The period of time within which alert events are automatically cleared. Unit: seconds. Default value: 300.
   * 
   * @example
   * 300
   */
  recoverTime?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRecover: 'AutoRecover',
      description: 'Description',
      integrationName: 'IntegrationName',
      integrationProductType: 'IntegrationProductType',
      recoverTime: 'RecoverTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecover: 'boolean',
      description: 'string',
      integrationName: 'string',
      integrationProductType: 'string',
      recoverTime: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

