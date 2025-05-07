// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TensorboardDataSourceSpec } from "./TensorboardDataSourceSpec";
import { TensorboardSpec } from "./TensorboardSpec";


export class Tensorboard extends $dara.Model {
  accessibility?: string;
  cpu?: number;
  /**
   * @example
   * datasource-test
   */
  dataSourceId?: string;
  dataSourceType?: string;
  /**
   * @example
   * test
   */
  displayName?: string;
  /**
   * @example
   * 1234567
   */
  duration?: string;
  /**
   * @example
   * 2021-01-12T14:35:00Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:00Z
   */
  gmtFinishTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:00Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * dlc-20210114104214-vf9lowjt3pso
   */
  jobId?: string;
  maxRunningTimeMinutes?: number;
  memory?: number;
  options?: string;
  priority?: string;
  quotaId?: string;
  quotaName?: string;
  /**
   * @example
   * Delete by user
   */
  reasonCode?: string;
  /**
   * @example
   * Tensorboard is deleted
   */
  reasonMessage?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * /root/data
   */
  summaryPath?: string;
  summaryRelativePath?: string;
  tensorboardDataSources?: TensorboardDataSourceSpec[];
  /**
   * @example
   * tensorboard-xxx
   */
  tensorboardId?: string;
  tensorboardSpec?: TensorboardSpec;
  /**
   * @example
   * http://xxxxxx
   */
  tensorboardUrl?: string;
  token?: string;
  /**
   * @example
   * lycxxxxx
   */
  userId?: string;
  /**
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

