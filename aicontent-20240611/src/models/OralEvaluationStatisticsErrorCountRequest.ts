// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OralEvaluationStatisticsErrorCountRequest extends $dara.Model {
  applicationAccessId?: string;
  endTime?: string;
  errorCode?: string[];
  granularity?: string;
  projectId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessId: 'applicationAccessId',
      endTime: 'endTime',
      errorCode: 'errorCode',
      granularity: 'granularity',
      projectId: 'projectId',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessId: 'string',
      endTime: 'string',
      errorCode: { 'type': 'array', 'itemType': 'string' },
      granularity: 'string',
      projectId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorCode)) {
      $dara.Model.validateArray(this.errorCode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

