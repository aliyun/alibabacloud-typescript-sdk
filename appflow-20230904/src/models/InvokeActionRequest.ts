// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeActionRequestAuthConfig extends $dara.Model {
  /**
   * @remarks
   * The type of authentication information.
   * 
   * @example
   * raw
   */
  type?: string;
  /**
   * @remarks
   * The authentication content. Its value is a raw JSON object or a credential ID, as determined by the `Type` parameter.
   * 
   * @example
   * {"AppId":"xxxx","AppSecret":"sk-xxx"}
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeActionRequest extends $dara.Model {
  /**
   * @remarks
   * The action ID.
   * 
   * This parameter is required.
   * 
   * @example
   * action-xxx
   */
  actionId?: string;
  /**
   * @remarks
   * The action version.
   * 
   * @example
   * 1
   */
  actionVersion?: string;
  /**
   * @remarks
   * The authentication information for the action.
   */
  authConfig?: InvokeActionRequestAuthConfig;
  /**
   * @remarks
   * The request body for the action.
   */
  body?: { [key: string]: any };
  /**
   * @remarks
   * The connector ID.
   * 
   * This parameter is required.
   * 
   * @example
   * connector-xxx
   */
  connectorId?: string;
  /**
   * @remarks
   * The connector version.
   * 
   * @example
   * 1
   */
  connectorVersion?: string;
  /**
   * @remarks
   * The request header parameters for the action.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The path parameters for the action.
   */
  path?: { [key: string]: string };
  /**
   * @remarks
   * The query parameters for the action.
   */
  query?: { [key: string]: string };
  /**
   * @remarks
   * Specifies whether to use streaming output.
   * 
   * @example
   * false
   */
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      actionId: 'ActionId',
      actionVersion: 'ActionVersion',
      authConfig: 'AuthConfig',
      body: 'Body',
      connectorId: 'ConnectorId',
      connectorVersion: 'ConnectorVersion',
      headers: 'Headers',
      path: 'Path',
      query: 'Query',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionId: 'string',
      actionVersion: 'string',
      authConfig: InvokeActionRequestAuthConfig,
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      connectorId: 'string',
      connectorVersion: 'string',
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      path: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      query: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      stream: 'boolean',
    };
  }

  validate() {
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.path) {
      $dara.Model.validateMap(this.path);
    }
    if(this.query) {
      $dara.Model.validateMap(this.query);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

