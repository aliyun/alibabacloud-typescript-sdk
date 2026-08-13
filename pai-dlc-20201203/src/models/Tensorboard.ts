// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TensorboardDataSourceSpec } from "./TensorboardDataSourceSpec";
import { TensorboardSpec } from "./TensorboardSpec";


export class Tensorboard extends $dara.Model {
  /**
   * @remarks
   * Visibility.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  cpu?: number;
  /**
   * @remarks
   * Data source ID.
   * 
   * @example
   * datasource-test
   */
  dataSourceId?: string;
  dataSourceType?: string;
  /**
   * @remarks
   * Display name.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * Runtime duration (seconds).
   * 
   * @example
   * 1234567
   */
  duration?: string;
  /**
   * @remarks
   * Creation time (UTC).
   * 
   * @example
   * 2021-01-12T14:35:00Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * End time (UTC).
   * 
   * @example
   * null
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * Modification time (UTC).
   * 
   * @example
   * 2021-01-12T14:36:00Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * dlc-20210114104214-vf9lowjt3pso
   */
  jobId?: string;
  maxRunningTimeMinutes?: number;
  memory?: number;
  options?: string;
  /**
   * @remarks
   * Tensorboard Job priority.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * Resource group ID used by Tensorboard.
   * 
   * @example
   * quota12***
   */
  quotaId?: string;
  /**
   * @remarks
   * Name of the resource quota used by Tensorboard.
   * 
   * @example
   * dlc-quota
   */
  quotaName?: string;
  /**
   * @remarks
   * Status details code.
   * 
   * @example
   * Delete by user
   */
  reasonCode?: string;
  /**
   * @remarks
   * Status details.
   * 
   * @example
   * Tensorboard is deleted
   */
  reasonMessage?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * File path.
   * 
   * @example
   * /root/data
   */
  summaryPath?: string;
  summaryRelativePath?: string;
  /**
   * @remarks
   * Datasets mounted by the Tensorboard Job.
   */
  tensorboardDataSources?: TensorboardDataSourceSpec[];
  /**
   * @remarks
   * Tensorboard ID.
   * 
   * @example
   * tensorboard-xxx
   */
  tensorboardId?: string;
  /**
   * @remarks
   * Pay-as-you-go configuration for the Tensorboard Job.
   */
  tensorboardSpec?: TensorboardSpec;
  /**
   * @remarks
   * Tensorboard URL.
   * 
   * @example
   * http://xxxxxx
   */
  tensorboardUrl?: string;
  token?: string;
  /**
   * @remarks
   * Creator ID.
   * 
   * @example
   * lycxxxxx
   */
  userId?: string;
  /**
   * @remarks
   * Creator username.
   * 
   * @example
   * tensorboard.pai
   */
  username?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      cpu: 'Cpu',
      dataSourceId: 'DataSourceId',
      dataSourceType: 'DataSourceType',
      displayName: 'DisplayName',
      duration: 'Duration',
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtModifyTime: 'GmtModifyTime',
      jobId: 'JobId',
      maxRunningTimeMinutes: 'MaxRunningTimeMinutes',
      memory: 'Memory',
      options: 'Options',
      priority: 'Priority',
      quotaId: 'QuotaId',
      quotaName: 'QuotaName',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      status: 'Status',
      summaryPath: 'SummaryPath',
      summaryRelativePath: 'SummaryRelativePath',
      tensorboardDataSources: 'TensorboardDataSources',
      tensorboardId: 'TensorboardId',
      tensorboardSpec: 'TensorboardSpec',
      tensorboardUrl: 'TensorboardUrl',
      token: 'Token',
      userId: 'UserId',
      username: 'Username',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      cpu: 'number',
      dataSourceId: 'string',
      dataSourceType: 'string',
      displayName: 'string',
      duration: 'string',
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtModifyTime: 'string',
      jobId: 'string',
      maxRunningTimeMinutes: 'number',
      memory: 'number',
      options: 'string',
      priority: 'string',
      quotaId: 'string',
      quotaName: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      status: 'string',
      summaryPath: 'string',
      summaryRelativePath: 'string',
      tensorboardDataSources: { 'type': 'array', 'itemType': TensorboardDataSourceSpec },
      tensorboardId: 'string',
      tensorboardSpec: TensorboardSpec,
      tensorboardUrl: 'string',
      token: 'string',
      userId: 'string',
      username: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tensorboardDataSources)) {
      $dara.Model.validateArray(this.tensorboardDataSources);
    }
    if(this.tensorboardSpec && typeof (this.tensorboardSpec as any).validate === 'function') {
      (this.tensorboardSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

