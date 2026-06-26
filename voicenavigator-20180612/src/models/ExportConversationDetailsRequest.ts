// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportConversationDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1582266750353
   */
  beginTimeLeftRange?: number;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1640793599000
   */
  beginTimeRightRange?: number;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 13581588**
   */
  callingNumber?: string;
  debugConversation?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 6c01a99f-1b72-4f75-a8bd-3875766bd19d
   */
  instanceId?: string;
  /**
   * @remarks
   * An array of optional parameters.
   */
  options?: string[];
  /**
   * @remarks
   * The result of the conversation.
   */
  result?: number;
  /**
   * @remarks
   * The minimum number of conversation turns.
   */
  roundsLeftRange?: number;
  /**
   * @remarks
   * The maximum number of conversation turns.
   */
  roundsRightRange?: number;
  static names(): { [key: string]: string } {
    return {
      beginTimeLeftRange: 'BeginTimeLeftRange',
      beginTimeRightRange: 'BeginTimeRightRange',
      callingNumber: 'CallingNumber',
      debugConversation: 'DebugConversation',
      instanceId: 'InstanceId',
      options: 'Options',
      result: 'Result',
      roundsLeftRange: 'RoundsLeftRange',
      roundsRightRange: 'RoundsRightRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimeLeftRange: 'number',
      beginTimeRightRange: 'number',
      callingNumber: 'string',
      debugConversation: 'number',
      instanceId: 'string',
      options: { 'type': 'array', 'itemType': 'string' },
      result: 'number',
      roundsLeftRange: 'number',
      roundsRightRange: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.options)) {
      $dara.Model.validateArray(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

