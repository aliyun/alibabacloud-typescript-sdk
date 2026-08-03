// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAICoachTaskRequest extends $dara.Model {
  requestId?: string;
  scriptRecordId?: string;
  studentAudioUrl?: string;
  studentId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      scriptRecordId: 'scriptRecordId',
      studentAudioUrl: 'studentAudioUrl',
      studentId: 'studentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scriptRecordId: 'string',
      studentAudioUrl: 'string',
      studentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

