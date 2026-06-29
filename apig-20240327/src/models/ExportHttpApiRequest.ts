// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportHttpApiRequestExtensionConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to export consumer authorization configurations for operations or routes.
   */
  withAuthConfig?: boolean;
  /**
   * @remarks
   * Specifies whether to export authorized consumers.
   */
  withAuthConsumer?: boolean;
  /**
   * @remarks
   * Specifies whether to export plug-in configurations.
   */
  withPlugin?: boolean;
  /**
   * @remarks
   * Specifies whether to export policy configurations.
   */
  withPolicy?: boolean;
  /**
   * @remarks
   * Specifies whether to export backend services.
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

export class ExportHttpApiRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to export plug-in configurations.
   */
  extensionConfig?: ExportHttpApiRequestExtensionConfig;
  /**
   * @remarks
   * The gateway instance ID. This parameter is required when you export gateway extension information.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The IDs of specific operations to export when you export a REST API.
   */
  operationIds?: string[];
  static names(): { [key: string]: string } {
    return {
      extensionConfig: 'extensionConfig',
      gatewayId: 'gatewayId',
      operationIds: 'operationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensionConfig: ExportHttpApiRequestExtensionConfig,
      gatewayId: 'string',
      operationIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.extensionConfig && typeof (this.extensionConfig as any).validate === 'function') {
      (this.extensionConfig as any).validate();
    }
    if(Array.isArray(this.operationIds)) {
      $dara.Model.validateArray(this.operationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

