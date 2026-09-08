// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVoicemailRecordingRequest extends $dara.Model {
  /**
   * @remarks
   * Call ID. Ensure that this call ID has a voicemail message; otherwise, the return result will contain no data.
   * 
   * This parameter is required.
   * 
   * @example
   * job-12515239414412****
   */
  contactId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

