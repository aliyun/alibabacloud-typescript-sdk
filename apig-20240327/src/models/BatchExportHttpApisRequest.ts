// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchExportHttpApisRequestExtensionConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to export the consumer authorization configuration.
   * 
   * @example
   * false
   */
  withAuthConfig?: boolean;
  /**
   * @remarks
   * Specifies whether to export the authorized consumers.
   * 
   * @example
   * false
   */
  withAuthConsumer?: boolean;
  /**
   * @remarks
   * Specifies whether to export the plugin configuration.
   * 
   * @example
   * false
   */
  withPlugin?: boolean;
  /**
   * @remarks
   * Specifies whether to export the policy configuration.
   * 
   * @example
   * false
   */
  withPolicy?: boolean;
  /**
   * @remarks
   * Specifies whether to export the backend service.
   * 
   * @example
   * false
   */
  withService?: boolean;
  static names(): { [key: string]: string } {
    return {
      withAuthConfig: 'withAuthConfig',
      withAuthConsumer: 'withAuthConsumer',
      withPlugin: 'withPlugin',
      withPolicy: 'withPolicy',
      withService: 'withService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withAuthConfig: 'boolean',
      withAuthConsumer: 'boolean',
      withPlugin: 'boolean',
      withPolicy: 'boolean',
      withService: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchExportHttpApisRequest extends $dara.Model {
  /**
   * @remarks
   * The list of API IDs to export.
   * 
   * This parameter is required.
   */
  apiIds?: string[];
  /**
   * @remarks
   * The API type.
   * 
   * This parameter is required.
   * 
   * @example
   * Http
   */
  apiType?: string;
  /**
   * @remarks
   * The export extension configuration. When this configuration is specified for a REST API, gatewayId is required. This configuration is required for batch export of HTTP APIs.
   */
  extensionConfig?: BatchExportHttpApisRequestExtensionConfig;
  /**
   * @remarks
   * The export format. Valid values: json and yaml. Default value: yaml.
   * 
   * @example
   * yaml
   */
  format?: string;
  /**
   * @remarks
   * The gateway instance ID. This parameter is required when extensionConfig is specified for a REST API. This parameter is required for batch export of HTTP APIs.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'apiIds',
      apiType: 'apiType',
      extensionConfig: 'extensionConfig',
      format: 'format',
      gatewayId: 'gatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: { 'type': 'array', 'itemType': 'string' },
      apiType: 'string',
      extensionConfig: BatchExportHttpApisRequestExtensionConfig,
      format: 'string',
      gatewayId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiIds)) {
      $dara.Model.validateArray(this.apiIds);
    }
    if(this.extensionConfig && typeof (this.extensionConfig as any).validate === 'function') {
      (this.extensionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

