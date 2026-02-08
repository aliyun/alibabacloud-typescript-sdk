// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppMaterialTask extends $dara.Model {
  completeTime?: string;
  completeTimeFormat?: string;
  failReason?: string;
  finalFileUrls?: string[];
  status?: string;
  subStatus?: string;
  submitTime?: string;
  taskId?: string;
  taskParam?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      completeTimeFormat: 'CompleteTimeFormat',
      failReason: 'FailReason',
      finalFileUrls: 'FinalFileUrls',
      status: 'Status',
      subStatus: 'SubStatus',
      submitTime: 'SubmitTime',
      taskId: 'TaskId',
      taskParam: 'TaskParam',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      completeTimeFormat: 'string',
      failReason: 'string',
      finalFileUrls: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      subStatus: 'string',
      submitTime: 'string',
      taskId: 'string',
      taskParam: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.finalFileUrls)) {
      $dara.Model.validateArray(this.finalFileUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

