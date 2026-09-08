// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartConferenceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * A JSON-formatted string representing an array of participants. Each array element represents a participant. For internal calls to agents, the participant is the target agent\\"s extension number. For external calls to customers, the participant is the customer\\"s phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * ["8045****","1317511****"]
   */
  participantListJson?: string;
  /**
   * @remarks
   * Ingest endpoint data. It cannot exceed 128 bytes and is primarily used for extension requirements. Ordinary customers do not need to concern themselves with it.
   * 
   * @example
   * 无
   */
  tags?: string;
  /**
   * @remarks
   * Timeout period. If the call is not answered within the time specified by this parameter, it will be automatically disconnected. This parameter is optional. The default value is 30 seconds.
   * 
   * @example
   * 30
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The agent ID initiating the conference call. This parameter is optional. If not specified, the agent mapped to the current RAM account is used by default.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      participantListJson: 'ParticipantListJson',
      tags: 'Tags',
      timeoutSeconds: 'TimeoutSeconds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      participantListJson: 'string',
      tags: 'string',
      timeoutSeconds: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

