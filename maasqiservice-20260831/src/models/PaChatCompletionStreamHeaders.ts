// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PaChatCompletionStreamHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The Agent instance access key used for QICloud Customer API authentication.
   * 
   * This parameter is required.
   * 
   * @example
   * qis_xxx
   */
  xQIAgentApiKey?: string;
  /**
   * @remarks
   * The published Mobile Planner Agent instance ID. Must correspond to the X-QI-Agent-Api-Key.
   * 
   * This parameter is required.
   * 
   * @example
   * PA_xxx
   */
  xQIInstanceId?: string;
  /**
   * @remarks
   * The optional session identifier. Can be omitted for the first turn, in which case the server generates one. Pass it back in subsequent turns to continue the Mobile Planner Agent session.
   * 
   * @example
   * session-xxx
   */
  xQISessionId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xQIAgentApiKey: 'X-QI-Agent-Api-Key',
      xQIInstanceId: 'X-QI-Instance-Id',
      xQISessionId: 'X-QI-Session-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xQIAgentApiKey: 'string',
      xQIInstanceId: 'string',
      xQISessionId: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

