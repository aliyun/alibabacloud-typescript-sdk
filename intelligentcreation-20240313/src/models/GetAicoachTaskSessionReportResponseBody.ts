// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachTaskSessionReportResponseBody extends $dara.Model {
  duration?: number;
  endTime?: string;
  evaluationRating?: string;
  evaluationResult?: string;
  extendCustomNameMap?: { [key: string]: string };
  feedback?: boolean;
  requestId?: string;
  scriptName?: string;
  startTime?: string;
  status?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      endTime: 'endTime',
      evaluationRating: 'evaluationRating',
      evaluationResult: 'evaluationResult',
      extendCustomNameMap: 'extendCustomNameMap',
      feedback: 'feedback',
      requestId: 'requestId',
      scriptName: 'scriptName',
      startTime: 'startTime',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      endTime: 'string',
      evaluationRating: 'string',
      evaluationResult: 'string',
      extendCustomNameMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      feedback: 'boolean',
      requestId: 'string',
      scriptName: 'string',
      startTime: 'string',
      status: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(this.extendCustomNameMap) {
      $dara.Model.validateMap(this.extendCustomNameMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

