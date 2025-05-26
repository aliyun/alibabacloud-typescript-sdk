// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataIngestionActions } from "./DataIngestionActions";
import { Input } from "./Input";
import { DataIngestionNotification } from "./DataIngestionNotification";
import { DataIngestionStatistic } from "./DataIngestionStatistic";


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

