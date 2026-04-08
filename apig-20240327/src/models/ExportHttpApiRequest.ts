// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportHttpApiRequestExtensionConfig extends $dara.Model {
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

export class ExportHttpApiRequest extends $dara.Model {
  extensionConfig?: ExportHttpApiRequestExtensionConfig;
  /**
   * @example
   * gw-xxx
   */
  gatewayId?: string;
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

