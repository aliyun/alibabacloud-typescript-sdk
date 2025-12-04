// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLdpsResourceCostResponseBody extends $dara.Model {
  endTime?: number;
  instanceId?: string;
  jobId?: string;
  requestId?: string;
  startTime?: number;
  totalResource?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      requestId: 'RequestId',
      startTime: 'StartTime',
      totalResource: 'TotalResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      jobId: 'string',
      requestId: 'string',
      startTime: 'number',
      totalResource: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

