// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachDebugResultRequest extends $dara.Model {
  dataId?: string;
  dataType?: string;
  scriptDebugId?: string;
  scriptRecordId?: string;
  scriptSnapshotId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'dataId',
      dataType: 'dataType',
      scriptDebugId: 'scriptDebugId',
      scriptRecordId: 'scriptRecordId',
      scriptSnapshotId: 'scriptSnapshotId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      dataType: 'string',
      scriptDebugId: 'string',
      scriptRecordId: 'string',
      scriptSnapshotId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

