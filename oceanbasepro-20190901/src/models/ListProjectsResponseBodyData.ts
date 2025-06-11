// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectsResponseBodyDataAlarmStats } from "./ListProjectsResponseBodyDataAlarmStats";
import { ListProjectsResponseBodyDataCommonTransferConfig } from "./ListProjectsResponseBodyDataCommonTransferConfig";
import { ListProjectsResponseBodyDataExtraInfo } from "./ListProjectsResponseBodyDataExtraInfo";
import { ListProjectsResponseBodyDataFullTransferConfig } from "./ListProjectsResponseBodyDataFullTransferConfig";
import { ListProjectsResponseBodyDataIncrTransferConfig } from "./ListProjectsResponseBodyDataIncrTransferConfig";
import { ListProjectsResponseBodyDataLabels } from "./ListProjectsResponseBodyDataLabels";
import { ListProjectsResponseBodyDataSinkConnectInfo } from "./ListProjectsResponseBodyDataSinkConnectInfo";
import { ListProjectsResponseBodyDataSourceConnectInfo } from "./ListProjectsResponseBodyDataSourceConnectInfo";
import { ListProjectsResponseBodyDataSteps } from "./ListProjectsResponseBodyDataSteps";
import { ListProjectsResponseBodyDataStructTransferConfig } from "./ListProjectsResponseBodyDataStructTransferConfig";
import { ListProjectsResponseBodyDataTransferMapping } from "./ListProjectsResponseBodyDataTransferMapping";
import { ListProjectsResponseBodyDataWorkerGradeInfo } from "./ListProjectsResponseBodyDataWorkerGradeInfo";


export class ListProjectsResponseBodyData extends $dara.Model {
  alarmStats?: ListProjectsResponseBodyDataAlarmStats;
  commonTransferConfig?: ListProjectsResponseBodyDataCommonTransferConfig;
  /**
   * @example
   * null
   */
  destConnId?: string;
  /**
   * @example
   * true
   */
  enableFullTransfer?: boolean;
  /**
   * @example
   * true
   */
  enableFullVerify?: boolean;
  /**
   * @example
   * true
   */
  enableIncrTransfer?: boolean;
  /**
   * @example
   * true
   */
  enableIncrVerify?: boolean;
  /**
   * @example
   * true
   */
  enableReverseIncrTransfer?: boolean;
  /**
   * @example
   * true
   */
  enableStructTransfer?: boolean;
  extraInfo?: ListProjectsResponseBodyDataExtraInfo;
  fullTransferConfig?: ListProjectsResponseBodyDataFullTransferConfig;
  /**
   * @example
   * 2023-07-13T06:26:15
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-07-13T08:01:27
   */
  gmtFinish?: string;
  /**
   * @example
   * 2023-07-13T07:01:27
   */
  gmtModified?: string;
  /**
   * @example
   * 2023-07-13T07:02:27
   */
  gmtStart?: string;
  /**
   * @example
   * np_4w****
   */
  id?: string;
  /**
   * @example
   * MEDIUM
   */
  importance?: string;
  incrTransferConfig?: ListProjectsResponseBodyDataIncrTransferConfig;
  /**
   * @example
   * false
   */
  isMerging?: boolean;
  /**
   * @example
   * false
   */
  isModifying?: boolean;
  /**
   * @example
   * false
   */
  isSubProject?: boolean;
  labels?: ListProjectsResponseBodyDataLabels[];
  /**
   * @example
   * project_name
   */
  name?: string;
  /**
   * @example
   * admin
   */
  owner?: string;
  sinkConnectInfo?: ListProjectsResponseBodyDataSinkConnectInfo;
  /**
   * @example
   * OB_MYSQL
   */
  sinkEndpointType?: string;
  sourceConnectInfo?: ListProjectsResponseBodyDataSourceConnectInfo;
  /**
   * @example
   * MYSQL
   */
  sourceEndpointType?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  steps?: ListProjectsResponseBodyDataSteps[];
  structTransferConfig?: ListProjectsResponseBodyDataStructTransferConfig;
  transferMapping?: ListProjectsResponseBodyDataTransferMapping;
  /**
   * @example
   * MIGRATION
   */
  type?: string;
  /**
   * @example
   * g_i4wa7XXX
   */
  workerGradeId?: string;
  workerGradeInfo?: ListProjectsResponseBodyDataWorkerGradeInfo;
  static names(): { [key: string]: string } {
    return {
      alarmStats: 'AlarmStats',
      commonTransferConfig: 'CommonTransferConfig',
      destConnId: 'DestConnId',
      enableFullTransfer: 'EnableFullTransfer',
      enableFullVerify: 'EnableFullVerify',
      enableIncrTransfer: 'EnableIncrTransfer',
      enableIncrVerify: 'EnableIncrVerify',
      enableReverseIncrTransfer: 'EnableReverseIncrTransfer',
      enableStructTransfer: 'EnableStructTransfer',
      extraInfo: 'ExtraInfo',
      fullTransferConfig: 'FullTransferConfig',
      gmtCreate: 'GmtCreate',
      gmtFinish: 'GmtFinish',
      gmtModified: 'GmtModified',
      gmtStart: 'GmtStart',
      id: 'Id',
      importance: 'Importance',
      incrTransferConfig: 'IncrTransferConfig',
      isMerging: 'IsMerging',
      isModifying: 'IsModifying',
      isSubProject: 'IsSubProject',
      labels: 'Labels',
      name: 'Name',
      owner: 'Owner',
      sinkConnectInfo: 'SinkConnectInfo',
      sinkEndpointType: 'SinkEndpointType',
      sourceConnectInfo: 'SourceConnectInfo',
      sourceEndpointType: 'SourceEndpointType',
      status: 'Status',
      steps: 'Steps',
      structTransferConfig: 'StructTransferConfig',
      transferMapping: 'TransferMapping',
      type: 'Type',
      workerGradeId: 'WorkerGradeId',
      workerGradeInfo: 'WorkerGradeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStats: ListProjectsResponseBodyDataAlarmStats,
      commonTransferConfig: ListProjectsResponseBodyDataCommonTransferConfig,
      destConnId: 'string',
      enableFullTransfer: 'boolean',
      enableFullVerify: 'boolean',
      enableIncrTransfer: 'boolean',
      enableIncrVerify: 'boolean',
      enableReverseIncrTransfer: 'boolean',
      enableStructTransfer: 'boolean',
      extraInfo: ListProjectsResponseBodyDataExtraInfo,
      fullTransferConfig: ListProjectsResponseBodyDataFullTransferConfig,
      gmtCreate: 'string',
      gmtFinish: 'string',
      gmtModified: 'string',
      gmtStart: 'string',
      id: 'string',
      importance: 'string',
      incrTransferConfig: ListProjectsResponseBodyDataIncrTransferConfig,
      isMerging: 'boolean',
      isModifying: 'boolean',
      isSubProject: 'boolean',
      labels: { 'type': 'array', 'itemType': ListProjectsResponseBodyDataLabels },
      name: 'string',
      owner: 'string',
      sinkConnectInfo: ListProjectsResponseBodyDataSinkConnectInfo,
      sinkEndpointType: 'string',
      sourceConnectInfo: ListProjectsResponseBodyDataSourceConnectInfo,
      sourceEndpointType: 'string',
      status: 'string',
      steps: { 'type': 'array', 'itemType': ListProjectsResponseBodyDataSteps },
      structTransferConfig: ListProjectsResponseBodyDataStructTransferConfig,
      transferMapping: ListProjectsResponseBodyDataTransferMapping,
      type: 'string',
      workerGradeId: 'string',
      workerGradeInfo: ListProjectsResponseBodyDataWorkerGradeInfo,
    };
  }

  validate() {
    if(this.alarmStats && typeof (this.alarmStats as any).validate === 'function') {
      (this.alarmStats as any).validate();
    }
    if(this.commonTransferConfig && typeof (this.commonTransferConfig as any).validate === 'function') {
      (this.commonTransferConfig as any).validate();
    }
    if(this.extraInfo && typeof (this.extraInfo as any).validate === 'function') {
      (this.extraInfo as any).validate();
    }
    if(this.fullTransferConfig && typeof (this.fullTransferConfig as any).validate === 'function') {
      (this.fullTransferConfig as any).validate();
    }
    if(this.incrTransferConfig && typeof (this.incrTransferConfig as any).validate === 'function') {
      (this.incrTransferConfig as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.sinkConnectInfo && typeof (this.sinkConnectInfo as any).validate === 'function') {
      (this.sinkConnectInfo as any).validate();
    }
    if(this.sourceConnectInfo && typeof (this.sourceConnectInfo as any).validate === 'function') {
      (this.sourceConnectInfo as any).validate();
    }
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    if(this.structTransferConfig && typeof (this.structTransferConfig as any).validate === 'function') {
      (this.structTransferConfig as any).validate();
    }
    if(this.transferMapping && typeof (this.transferMapping as any).validate === 'function') {
      (this.transferMapping as any).validate();
    }
    if(this.workerGradeInfo && typeof (this.workerGradeInfo as any).validate === 'function') {
      (this.workerGradeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

