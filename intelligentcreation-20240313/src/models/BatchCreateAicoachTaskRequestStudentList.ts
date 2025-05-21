// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchCreateAICoachTaskRequestStudentList extends $dara.Model {
  studentAudioUrl?: string;
  studentId?: string;
  static names(): { [key: string]: string } {
    return {
      studentAudioUrl: 'studentAudioUrl',
      studentId: 'studentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

