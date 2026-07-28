// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TuningHistoryNewResourceSetting extends $dara.Model {
  cpu?: number;
  memory?: string;
  parallelism?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      memory: 'memory',
      parallelism: 'parallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memory: 'string',
      parallelism: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TuningHistoryOldResourceSetting extends $dara.Model {
  cpu?: number;
  memory?: string;
  parallelism?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      memory: 'memory',
      parallelism: 'parallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memory: 'string',
      parallelism: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TuningHistory extends $dara.Model {
  actionType?: string;
  annotations?: { [key: string]: string };
  deploymentName?: string;
  isHotUpdate?: boolean;
  jobId?: string;
  newResourceSetting?: TuningHistoryNewResourceSetting;
  oldResourceSetting?: TuningHistoryOldResourceSetting;
  triggerTime?: number;
  tuningId?: string;
  tuningMessage?: string;
  tuningState?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'actionType',
      annotations: 'annotations',
      deploymentName: 'deploymentName',
      isHotUpdate: 'isHotUpdate',
      jobId: 'jobId',
      newResourceSetting: 'newResourceSetting',
      oldResourceSetting: 'oldResourceSetting',
      triggerTime: 'triggerTime',
      tuningId: 'tuningId',
      tuningMessage: 'tuningMessage',
      tuningState: 'tuningState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      deploymentName: 'string',
      isHotUpdate: 'boolean',
      jobId: 'string',
      newResourceSetting: TuningHistoryNewResourceSetting,
      oldResourceSetting: TuningHistoryOldResourceSetting,
      triggerTime: 'number',
      tuningId: 'string',
      tuningMessage: 'string',
      tuningState: 'string',
    };
  }

  validate() {
    if(this.annotations) {
      $dara.Model.validateMap(this.annotations);
    }
    if(this.newResourceSetting && typeof (this.newResourceSetting as any).validate === 'function') {
      (this.newResourceSetting as any).validate();
    }
    if(this.oldResourceSetting && typeof (this.oldResourceSetting as any).validate === 'function') {
      (this.oldResourceSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

