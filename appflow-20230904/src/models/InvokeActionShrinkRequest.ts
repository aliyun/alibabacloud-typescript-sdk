// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeActionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * action-xxx
   */
  actionId?: string;
  /**
   * @example
   * 1
   */
  actionVersion?: string;
  authConfigShrink?: string;
  bodyShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * connector-xxx
   */
  connectorId?: string;
  /**
   * @example
   * 1
   */
  connectorVersion?: string;
  headersShrink?: string;
  pathShrink?: string;
  queryShrink?: string;
  /**
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

