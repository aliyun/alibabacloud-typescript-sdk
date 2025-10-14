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

export class BatchCreateAICoachTaskRequest extends $dara.Model {
  /**
   * @example
   * 7915125A-0D96-5A25-A54B-D3B739A86AFC
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  scriptRecordId?: string;
  studentIds?: string[];
  studentList?: BatchCreateAICoachTaskRequestStudentList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      scriptRecordId: 'scriptRecordId',
      studentIds: 'studentIds',
      studentList: 'studentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scriptRecordId: 'string',
      studentIds: { 'type': 'array', 'itemType': 'string' },
      studentList: { 'type': 'array', 'itemType': BatchCreateAICoachTaskRequestStudentList },
    };
  }

  validate() {
    if(Array.isArray(this.studentIds)) {
      $dara.Model.validateArray(this.studentIds);
    }
    if(Array.isArray(this.studentList)) {
      $dara.Model.validateArray(this.studentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

