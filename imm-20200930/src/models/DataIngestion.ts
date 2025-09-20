// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Input } from "./Input";
import { MNS } from "./Mns";
import { RocketMQ } from "./RocketMq";
import { FastFailPolicy } from "./FastFailPolicy";


export class DataIngestionActions extends $dara.Model {
  fastFailPolicy?: FastFailPolicy;
  name?: string;
  parameters?: string[];
  static names(): { [key: string]: string } {
    return {
      fastFailPolicy: 'FastFailPolicy',
      name: 'Name',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fastFailPolicy: FastFailPolicy,
      name: 'string',
      parameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.fastFailPolicy && typeof (this.fastFailPolicy as any).validate === 'function') {
      (this.fastFailPolicy as any).validate();
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataIngestionNotification extends $dara.Model {
  endpoint?: string;
  MNS?: MNS;
  rocketMQ?: RocketMQ;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      MNS: 'MNS',
      rocketMQ: 'RocketMQ',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      MNS: MNS,
      rocketMQ: RocketMQ,
      topic: 'string',
    };
  }

  validate() {
    if(this.MNS && typeof (this.MNS as any).validate === 'function') {
      (this.MNS as any).validate();
    }
    if(this.rocketMQ && typeof (this.rocketMQ as any).validate === 'function') {
      (this.rocketMQ as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataIngestionStatistic extends $dara.Model {
  skipFiles?: number;
  submitFailure?: number;
  submitSuccess?: number;
  static names(): { [key: string]: string } {
    return {
      skipFiles: 'SkipFiles',
      submitFailure: 'SubmitFailure',
      submitSuccess: 'SubmitSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skipFiles: 'number',
      submitFailure: 'number',
      submitSuccess: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataIngestion extends $dara.Model {
  actions?: DataIngestionActions[];
  createTime?: string;
  error?: string;
  id?: string;
  input?: Input;
  marker?: string;
  notification?: DataIngestionNotification;
  /**
   * @example
   * IncrementalScanning
   */
  phase?: string;
  /**
   * @example
   * AliyunIMMBatchTriggerRole
   */
  serviceRole?: string;
  state?: string;
  statistic?: DataIngestionStatistic;
  tags?: { [key: string]: any };
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      createTime: 'CreateTime',
      error: 'Error',
      id: 'Id',
      input: 'Input',
      marker: 'Marker',
      notification: 'Notification',
      phase: 'Phase',
      serviceRole: 'ServiceRole',
      state: 'State',
      statistic: 'Statistic',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': DataIngestionActions },
      createTime: 'string',
      error: 'string',
      id: 'string',
      input: Input,
      marker: 'string',
      notification: DataIngestionNotification,
      phase: 'string',
      serviceRole: 'string',
      state: 'string',
      statistic: DataIngestionStatistic,
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(this.statistic && typeof (this.statistic as any).validate === 'function') {
      (this.statistic as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

