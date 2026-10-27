// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AigcChatCompletionStreamHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The instance access key. The key must belong to the Creative Agent instance being called. This key is different from the AccessKey Secret used for OpenAPI signing. Do not expose it publicly.
   * 
   * This parameter is required.
   * 
   * @example
   * qis_xxx
   */
  xQIAgentApiKey?: string;
  /**
   * @remarks
   * The published Creative Agent instance ID. Must correspond to the X-QI-Agent-Api-Key.
   * 
   * This parameter is required.
   * 
   * @example
   * AIGC_xxx
   */
  xQIInstanceId?: string;
  /**
   * @remarks
   * The session identifier. Can be omitted for the first turn. Obtain it from the qi_session_id field in the SSE response and pass it back in subsequent turns. Use no more than 128 characters consisting of letters, digits, periods, underscores, colons, or hyphens.
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

