// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportConversationDetailsRequest extends $dara.Model {
  abTestId?: string;
  /**
   * @remarks
   * The left boundary of the start date range.
   * 
   * @example
   * 1582266750353
   */
  beginTimeLeftRange?: number;
  /**
   * @remarks
   * The right boundary of the start date range.
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
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6c01a99f-1b72-4f75-a8bd-3875766bd19d
   */
  instanceId?: string;
  /**
   * @remarks
   * The optional parameters.
   */
  options?: string[];
  result?: number;
  roundsLeftRange?: number;
  roundsRightRange?: number;
  static names(): { [key: string]: string } {
    return {
      abTestId: 'AbTestId',
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
      abTestId: 'string',
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

