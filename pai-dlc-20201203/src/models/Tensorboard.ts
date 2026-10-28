// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TensorboardDataSourceSpec } from "./TensorboardDataSourceSpec";
import { TensorboardSpec } from "./TensorboardSpec";


export class Tensorboard extends $dara.Model {
  /**
   * @remarks
   * The visibility.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The CPU resources.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * datasource-test
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The dataset type.
   * 
   * @example
   * OSS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The duration in seconds.
   * 
   * @example
   * 60
   */
  duration?: string;
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2021-01-12T14:35:00Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The end time in UTC.
   * 
   * @example
   * null
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The modification time in UTC.
   * 
   * @example
   * 2021-01-12T14:36:00Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210114104214-vf9lowjt3pso
   */
  jobId?: string;
  /**
   * @remarks
   * The maximum running duration in minutes.
   * 
   * @example
   * 240
   */
  maxRunningTimeMinutes?: number;
  /**
   * @remarks
   * The memory size in GB.
   * 
   * @example
   * 1000
   */
  memory?: number;
  /**
   * @remarks
   * The extended fields of the dataset in JSON format. Currently, MountPath is supported, which specifies the mount path for a custom dataset.
   * 
   * @example
   * {"mountpath":"/root/data/"}
   */
  options?: string;
  /**
   * @remarks
   * The priority of the Tensorboard job.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The ID of the resource group used by Tensorboard.
   * 
   * @example
   * quota12***
   */
  quotaId?: string;
  /**
   * @remarks
   * The name of the resource quota used by Tensorboard.
   * 
   * @example
   * dlc-quota
   */
  quotaName?: string;
  /**
   * @remarks
   * The status detail code.
   * 
   * @example
   * ""
   */
  reasonCode?: string;
  /**
   * @remarks
   * The status details.
   * 
   * @example
   * ""
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /root/data
   */
  summaryPath?: string;
  /**
   * @remarks
   * The absolute path of the summary.
   * 
   * @example
   * /summary/
   */
  summaryRelativePath?: string;
  /**
   * @remarks
   * The datasets mounted to the Tensorboard job.
   */
  tensorboardDataSources?: TensorboardDataSourceSpec[];
  /**
   * @remarks
   * The Tensorboard ID.
   * 
   * @example
   * tensorboard-xxx
   */
  tensorboardId?: string;
  /**
   * @remarks
   * The pay-as-you-go configuration for the Tensorboard job.
   */
  tensorboardSpec?: TensorboardSpec;
  /**
   * @remarks
   * The Tensorboard URL.
   * 
   * @example
   * http://xxxxxx
   */
  tensorboardUrl?: string;
  /**
   * @remarks
   * The token value.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9*****
   */
  token?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * lycxxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The username of the creator.
   * 
   * @example
   * tensorboard.pai
   */
  username?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123***
   */
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

