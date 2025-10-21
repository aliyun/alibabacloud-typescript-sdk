// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotUpdateJobParams } from "./HotUpdateJobParams";
import { HotUpdateJobStatus } from "./HotUpdateJobStatus";
import { BriefResourceSetting } from "./BriefResourceSetting";


export class HotUpdateJobResult extends $dara.Model {
  hotUpdateParams?: HotUpdateJobParams;
  jobHotUpdateId?: string;
  jobId?: string;
  status?: HotUpdateJobStatus;
  targetResourceSetting?: BriefResourceSetting;
  static names(): { [key: string]: string } {
    return {
      hotUpdateParams: 'hotUpdateParams',
      jobHotUpdateId: 'jobHotUpdateId',
      jobId: 'jobId',
      status: 'status',
      targetResourceSetting: 'targetResourceSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotUpdateParams: HotUpdateJobParams,
      jobHotUpdateId: 'string',
      jobId: 'string',
      status: HotUpdateJobStatus,
      targetResourceSetting: BriefResourceSetting,
    };
  }

  validate() {
    if(this.hotUpdateParams && typeof (this.hotUpdateParams as any).validate === 'function') {
      (this.hotUpdateParams as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    if(this.targetResourceSetting && typeof (this.targetResourceSetting as any).validate === 'function') {
      (this.targetResourceSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

