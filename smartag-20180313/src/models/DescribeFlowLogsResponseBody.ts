// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowLogsResponseBodyFlowLogsFlowLogSetType extends $dara.Model {
  activeAging?: number;
  description?: string;
  flowLogId?: string;
  inactiveAging?: number;
  logstoreName?: string;
  name?: string;
  netflowServerIp?: string;
  netflowServerPort?: string;
  netflowVersion?: string;
  outputType?: string;
  projectName?: string;
  resourceGroupId?: string;
  slsRegionId?: string;
  status?: string;
  totalSagNum?: number;
  static names(): { [key: string]: string } {
    return {
      activeAging: 'ActiveAging',
      description: 'Description',
      flowLogId: 'FlowLogId',
      inactiveAging: 'InactiveAging',
      logstoreName: 'LogstoreName',
      name: 'Name',
      netflowServerIp: 'NetflowServerIp',
      netflowServerPort: 'NetflowServerPort',
      netflowVersion: 'NetflowVersion',
      outputType: 'OutputType',
      projectName: 'ProjectName',
      resourceGroupId: 'ResourceGroupId',
      slsRegionId: 'SlsRegionId',
      status: 'Status',
      totalSagNum: 'TotalSagNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAging: 'number',
      description: 'string',
      flowLogId: 'string',
      inactiveAging: 'number',
      logstoreName: 'string',
      name: 'string',
      netflowServerIp: 'string',
      netflowServerPort: 'string',
      netflowVersion: 'string',
      outputType: 'string',
      projectName: 'string',
      resourceGroupId: 'string',
      slsRegionId: 'string',
      status: 'string',
      totalSagNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBodyFlowLogs extends $dara.Model {
  flowLogSetType?: DescribeFlowLogsResponseBodyFlowLogsFlowLogSetType[];
  static names(): { [key: string]: string } {
    return {
      flowLogSetType: 'FlowLogSetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogSetType: { 'type': 'array', 'itemType': DescribeFlowLogsResponseBodyFlowLogsFlowLogSetType },
    };
  }

  validate() {
    if(Array.isArray(this.flowLogSetType)) {
      $dara.Model.validateArray(this.flowLogSetType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBody extends $dara.Model {
  flowLogs?: DescribeFlowLogsResponseBodyFlowLogs;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 44F4E2D0-77F7-4DEC-969B-061688946143
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of flow logs.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      flowLogs: 'FlowLogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogs: DescribeFlowLogsResponseBodyFlowLogs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.flowLogs && typeof (this.flowLogs as any).validate === 'function') {
      (this.flowLogs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

