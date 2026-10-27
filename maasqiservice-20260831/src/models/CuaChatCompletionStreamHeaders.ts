// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CuaChatCompletionStreamHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qis_<instance_api_key>
   */
  xQIAgentApiKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CUA_<instance_id>
   */
  xQIInstanceId?: string;
  /**
   * @example
   * session-cua-1
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

