// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeActionShrinkRequest extends $dara.Model {
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
  authConfigShrink?: string;
  /**
   * @remarks
   * The request body for the action.
   */
  bodyShrink?: string;
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
  headersShrink?: string;
  /**
   * @remarks
   * The path parameters for the action.
   */
  pathShrink?: string;
  /**
   * @remarks
   * The query parameters for the action.
   */
  queryShrink?: string;
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
      authConfigShrink: 'AuthConfig',
      bodyShrink: 'Body',
      connectorId: 'ConnectorId',
      connectorVersion: 'ConnectorVersion',
      headersShrink: 'Headers',
      pathShrink: 'Path',
      queryShrink: 'Query',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionId: 'string',
      actionVersion: 'string',
      authConfigShrink: 'string',
      bodyShrink: 'string',
      connectorId: 'string',
      connectorVersion: 'string',
      headersShrink: 'string',
      pathShrink: 'string',
      queryShrink: 'string',
      stream: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

