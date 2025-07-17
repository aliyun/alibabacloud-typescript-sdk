// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntegrationResponseBodyIntegration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether alert events are automatically cleared. Default value: true. Valid values:
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
   * The ID of the alert integration.
   * 
   * @example
   * 1234
   */
  integrationId?: number;
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
   * The service of the alert integration. Valid values:
   * 
   * *   CLOUD_MONITOR: CloudMonitor
   * *   LOG_SERVICE: Log Service
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
  static names(): { [key: string]: string } {
    return {
      autoRecover: 'AutoRecover',
      description: 'Description',
      integrationId: 'IntegrationId',
      integrationName: 'IntegrationName',
      integrationProductType: 'IntegrationProductType',
      recoverTime: 'RecoverTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecover: 'boolean',
      description: 'string',
      integrationId: 'number',
      integrationName: 'string',
      integrationProductType: 'string',
      recoverTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntegrationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned information about the alert integration.
   */
  integration?: CreateIntegrationResponseBodyIntegration;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34ED024E-9E31-434A-9E4E-D9D15C3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      integration: 'Integration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integration: CreateIntegrationResponseBodyIntegration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.integration && typeof (this.integration as any).validate === 'function') {
      (this.integration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

