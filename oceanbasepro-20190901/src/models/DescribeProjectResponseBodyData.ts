// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProjectResponseBodyDataAlarmStats } from "./DescribeProjectResponseBodyDataAlarmStats";
import { DescribeProjectResponseBodyDataCommonTransferConfig } from "./DescribeProjectResponseBodyDataCommonTransferConfig";
import { DescribeProjectResponseBodyDataExtraInfo } from "./DescribeProjectResponseBodyDataExtraInfo";
import { DescribeProjectResponseBodyDataFullTransferConfig } from "./DescribeProjectResponseBodyDataFullTransferConfig";
import { DescribeProjectResponseBodyDataIncrTransferConfig } from "./DescribeProjectResponseBodyDataIncrTransferConfig";
import { DescribeProjectResponseBodyDataLabels } from "./DescribeProjectResponseBodyDataLabels";
import { DescribeProjectResponseBodyDataReverseIncrTransferConfig } from "./DescribeProjectResponseBodyDataReverseIncrTransferConfig";
import { DescribeProjectResponseBodyDataSinkConnectInfo } from "./DescribeProjectResponseBodyDataSinkConnectInfo";
import { DescribeProjectResponseBodyDataSourceConnectInfo } from "./DescribeProjectResponseBodyDataSourceConnectInfo";
import { DescribeProjectResponseBodyDataSteps } from "./DescribeProjectResponseBodyDataSteps";
import { DescribeProjectResponseBodyDataStructTransferConfig } from "./DescribeProjectResponseBodyDataStructTransferConfig";
import { DescribeProjectResponseBodyDataTransferMapping } from "./DescribeProjectResponseBodyDataTransferMapping";
import { DescribeProjectResponseBodyDataWorkerGradeInfo } from "./DescribeProjectResponseBodyDataWorkerGradeInfo";


export class DescribeProjectResponseBodyData extends $dara.Model {
  alarmStats?: DescribeProjectResponseBodyDataAlarmStats;
  commonTransferConfig?: DescribeProjectResponseBodyDataCommonTransferConfig;
  /**
   * @example
   * c_deg***
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
  extraInfo?: DescribeProjectResponseBodyDataExtraInfo;
  fullTransferConfig?: DescribeProjectResponseBodyDataFullTransferConfig;
  /**
   * @example
   * 2023-07-13T06:26:15
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-07-13T07:02:27
   */
  gmtFinish?: string;
  /**
   * @example
   * 2023-07-13T06:26:15
   */
  gmtModified?: string;
  /**
   * @example
   * 2023-07-13T07:02:27
   */
  gmtStart?: string;
  /**
   * @example
   * np_fe****
   */
  id?: string;
  /**
   * @example
   * HIGH
   */
  importance?: string;
  incrTransferConfig?: DescribeProjectResponseBodyDataIncrTransferConfig;
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
  labels?: DescribeProjectResponseBodyDataLabels[];
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * omsefry***
   */
  owner?: string;
  reverseIncrTransferConfig?: DescribeProjectResponseBodyDataReverseIncrTransferConfig;
  sinkConnectInfo?: DescribeProjectResponseBodyDataSinkConnectInfo;
  /**
   * @example
   * MYSQL
   */
  sinkEndpointType?: string;
  sourceConnectInfo?: DescribeProjectResponseBodyDataSourceConnectInfo;
  /**
   * @example
   * OB_MYSQL
   */
  sourceEndpointType?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  steps?: DescribeProjectResponseBodyDataSteps[];
  structTransferConfig?: DescribeProjectResponseBodyDataStructTransferConfig;
  transferMapping?: DescribeProjectResponseBodyDataTransferMapping;
  /**
   * @example
   * SYNC
   */
  type?: string;
  /**
   * @example
   * g_i4wa7XXX
   */
  workerGradeId?: string;
  workerGradeInfo?: DescribeProjectResponseBodyDataWorkerGradeInfo;
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
      reverseIncrTransferConfig: 'ReverseIncrTransferConfig',
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
      alarmStats: DescribeProjectResponseBodyDataAlarmStats,
      commonTransferConfig: DescribeProjectResponseBodyDataCommonTransferConfig,
      destConnId: 'string',
      enableFullTransfer: 'boolean',
      enableFullVerify: 'boolean',
      enableIncrTransfer: 'boolean',
      enableIncrVerify: 'boolean',
      enableReverseIncrTransfer: 'boolean',
      enableStructTransfer: 'boolean',
      extraInfo: DescribeProjectResponseBodyDataExtraInfo,
      fullTransferConfig: DescribeProjectResponseBodyDataFullTransferConfig,
      gmtCreate: 'string',
      gmtFinish: 'string',
      gmtModified: 'string',
      gmtStart: 'string',
      id: 'string',
      importance: 'string',
      incrTransferConfig: DescribeProjectResponseBodyDataIncrTransferConfig,
      isMerging: 'boolean',
      isModifying: 'boolean',
      isSubProject: 'boolean',
      labels: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataLabels },
      name: 'string',
      owner: 'string',
      reverseIncrTransferConfig: DescribeProjectResponseBodyDataReverseIncrTransferConfig,
      sinkConnectInfo: DescribeProjectResponseBodyDataSinkConnectInfo,
      sinkEndpointType: 'string',
      sourceConnectInfo: DescribeProjectResponseBodyDataSourceConnectInfo,
      sourceEndpointType: 'string',
      status: 'string',
      steps: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataSteps },
      structTransferConfig: DescribeProjectResponseBodyDataStructTransferConfig,
      transferMapping: DescribeProjectResponseBodyDataTransferMapping,
      type: 'string',
      workerGradeId: 'string',
      workerGradeInfo: DescribeProjectResponseBodyDataWorkerGradeInfo,
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
    if(this.reverseIncrTransferConfig && typeof (this.reverseIncrTransferConfig as any).validate === 'function') {
      (this.reverseIncrTransferConfig as any).validate();
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

