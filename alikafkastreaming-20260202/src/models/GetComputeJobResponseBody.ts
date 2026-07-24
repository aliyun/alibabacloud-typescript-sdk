// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   */
  createTime?: string;
  cuLimit?: number;
  cuReserved?: number;
  cuUsed?: number;
  debugMode?: number;
  deployedSql?: string;
  draftSql?: string;
  historyInfos?: string;
  instanceId?: string;
  jobConfig?: string;
  jobName?: string;
  owner?: string;
  regionId?: string;
  remark?: string;
  status?: string;
  upgradeMode?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      cuLimit: 'CuLimit',
      cuReserved: 'CuReserved',
      cuUsed: 'CuUsed',
      debugMode: 'DebugMode',
      deployedSql: 'DeployedSql',
      draftSql: 'DraftSql',
      historyInfos: 'HistoryInfos',
      instanceId: 'InstanceId',
      jobConfig: 'JobConfig',
      jobName: 'JobName',
      owner: 'Owner',
      regionId: 'RegionId',
      remark: 'Remark',
      status: 'Status',
      upgradeMode: 'UpgradeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      cuLimit: 'number',
      cuReserved: 'number',
      cuUsed: 'number',
      debugMode: 'number',
      deployedSql: 'string',
      draftSql: 'string',
      historyInfos: 'string',
      instanceId: 'string',
      jobConfig: 'string',
      jobName: 'string',
      owner: 'string',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      upgradeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeJobResponseBody extends $dara.Model {
  code?: number;
  data?: GetComputeJobResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetComputeJobResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

