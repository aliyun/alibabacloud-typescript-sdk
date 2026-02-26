// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Input } from "./Input";
import { MNS } from "./Mns";
import { RocketMQ } from "./RocketMq";
import { FastFailPolicy } from "./FastFailPolicy";


export class DataIngestionActions extends $dara.Model {
  /**
   * @remarks
   * The on-error policy that is used to quickly troubleshoot an error.
   */
  fastFailPolicy?: FastFailPolicy;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * doc/convert
   */
  name?: string;
  /**
   * @remarks
   * The template parameters.
   */
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
  /**
   * @remarks
   * The Simple Message Queue (SMQ) endpoint.
   * 
   * @example
   * http://1111111111.mns.cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * MNS
   */
  MNS?: MNS;
  /**
   * @remarks
   * RocketMQ
   */
  rocketMQ?: RocketMQ;
  /**
   * @remarks
   * The SMQ topic.
   * 
   * @example
   * topic1
   */
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
  /**
   * @remarks
   * The number of files that are skipped.
   * 
   * @example
   * 0
   */
  skipFiles?: number;
  /**
   * @remarks
   * The number of files that fail to be submitted.
   * 
   * @example
   * 1
   */
  submitFailure?: number;
  /**
   * @remarks
   * The number of files that are submitted.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The templates.
   */
  actions?: DataIngestionActions[];
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2020-11-10T03:50:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * api returns error: SDKError: StatusCode: 404 Code: ResourceNotFound
   */
  error?: string;
  /**
   * @remarks
   * The unique ID of the data ingestion.
   * 
   * @example
   * trigger-9f72636a-0f0c-4baf-ae78-38b27bfe****
   */
  id?: string;
  /**
   * @remarks
   * The information about the data source.
   */
  input?: Input;
  /**
   * @remarks
   * The task execution location.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpw****
   */
  marker?: string;
  /**
   * @remarks
   * The notification for task completion.
   */
  notification?: DataIngestionNotification;
  /**
   * @remarks
   * The scanning phase.
   * 
   * @example
   * IncrementalScanning
   */
  phase?: string;
  /**
   * @remarks
   * The service-linked role.
   * 
   * @example
   * AliyunIMMBatchTriggerRole
   */
  serviceRole?: string;
  /**
   * @remarks
   * The status of the batch processing task.
   * 
   * *   Ready: The task is created.
   * *   Running: The task is running.
   * *   Failed: The task fails and cannot be automatically recovered.
   * *   Suspended: The task is suspended.
   * *   Succeeded: The task is successful.
   * 
   * @example
   * Succeeded
   */
  state?: string;
  /**
   * @remarks
   * The statistical information.
   */
  statistic?: DataIngestionStatistic;
  /**
   * @remarks
   * The task tags.
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The time when the task was updated.
   * 
   * @example
   * 2021-12-18T07:40:29Z
   */
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

