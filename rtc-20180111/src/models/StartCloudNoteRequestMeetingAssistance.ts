// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCloudNoteRequestMeetingAssistance extends $dara.Model {
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  meetingAssistanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      meetingAssistanceType: 'MeetingAssistanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      meetingAssistanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.meetingAssistanceType)) {
      $dara.Model.validateArray(this.meetingAssistanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

