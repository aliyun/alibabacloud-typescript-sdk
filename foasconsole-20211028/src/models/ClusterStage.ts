// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StageWithWeight } from "./StageWithWeight";


export class ClusterStage extends $dara.Model {
  currentStage?: number;
  message?: string;
  status?: string;
  totalStageWithWeight?: StageWithWeight[];
  static names(): { [key: string]: string } {
    return {
      currentStage: 'CurrentStage',
      message: 'Message',
      status: 'Status',
      totalStageWithWeight: 'TotalStageWithWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStage: 'number',
      message: 'string',
      status: 'string',
      totalStageWithWeight: { 'type': 'array', 'itemType': StageWithWeight },
    };
  }

  validate() {
    if(Array.isArray(this.totalStageWithWeight)) {
      $dara.Model.validateArray(this.totalStageWithWeight);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

