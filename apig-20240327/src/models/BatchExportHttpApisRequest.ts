// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchExportHttpApisRequestExtensionConfig extends $dara.Model {
  withAuthConfig?: boolean;
  withAuthConsumer?: boolean;
  withPlugin?: boolean;
  withPolicy?: boolean;
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
   * This parameter is required.
   */
  apiIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Http
   */
  apiType?: string;
  extensionConfig?: BatchExportHttpApisRequestExtensionConfig;
  /**
   * @example
   * yaml
   */
  format?: string;
  /**
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

