// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OralEvaluationStatisticsCallsCountRequest extends $dara.Model {
  applicationAccessId?: string;
  endTime?: string;
  granularity?: string;
  projectId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessId: 'applicationAccessId',
      endTime: 'endTime',
      granularity: 'granularity',
      projectId: 'projectId',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessId: 'string',
      endTime: 'string',
      granularity: 'string',
      projectId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

