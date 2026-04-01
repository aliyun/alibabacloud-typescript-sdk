// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefreshAutoRefresh extends $dara.Model {
  refreshPath?: string;
  static names(): { [key: string]: string } {
    return {
      refreshPath: 'RefreshPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefresh extends $dara.Model {
  autoRefresh?: DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefreshAutoRefresh[];
  static names(): { [key: string]: string } {
    return {
      autoRefresh: 'AutoRefresh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRefresh: { 'type': 'array', 'itemType': DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefreshAutoRefresh },
    };
  }

  validate() {
    if(Array.isArray(this.autoRefresh)) {
      $dara.Model.validateArray(this.autoRefresh);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowsResponseBodyDataFlowInfoDataFlow extends $dara.Model {
  autoRefresh?: DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefresh;
  autoRefreshInterval?: number;
  autoRefreshPolicy?: string;
  createTime?: string;
  dataFlowId?: string;
  description?: string;
  errorMessage?: string;
  fileSystemId?: string;
  fileSystemPath?: string;
  fsetDescription?: string;
  fsetId?: string;
  sourceSecurityType?: string;
  sourceStorage?: string;
  /**
   * @remarks
   * 源端存储内的访问路径。
   */
  sourceStoragePath?: string;
  status?: string;
  throughput?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoRefresh: 'AutoRefresh',
      autoRefreshInterval: 'AutoRefreshInterval',
      autoRefreshPolicy: 'AutoRefreshPolicy',
      createTime: 'CreateTime',
      dataFlowId: 'DataFlowId',
      description: 'Description',
      errorMessage: 'ErrorMessage',
      fileSystemId: 'FileSystemId',
      fileSystemPath: 'FileSystemPath',
      fsetDescription: 'FsetDescription',
      fsetId: 'FsetId',
      sourceSecurityType: 'SourceSecurityType',
      sourceStorage: 'SourceStorage',
      sourceStoragePath: 'SourceStoragePath',
      status: 'Status',
      throughput: 'Throughput',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRefresh: DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefresh,
      autoRefreshInterval: 'number',
      autoRefreshPolicy: 'string',
      createTime: 'string',
      dataFlowId: 'string',
      description: 'string',
      errorMessage: 'string',
      fileSystemId: 'string',
      fileSystemPath: 'string',
      fsetDescription: 'string',
      fsetId: 'string',
      sourceSecurityType: 'string',
      sourceStorage: 'string',
      sourceStoragePath: 'string',
      status: 'string',
      throughput: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.autoRefresh && typeof (this.autoRefresh as any).validate === 'function') {
      (this.autoRefresh as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowsResponseBodyDataFlowInfo extends $dara.Model {
  dataFlow?: DescribeDataFlowsResponseBodyDataFlowInfoDataFlow[];
  static names(): { [key: string]: string } {
    return {
      dataFlow: 'DataFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFlow: { 'type': 'array', 'itemType': DescribeDataFlowsResponseBodyDataFlowInfoDataFlow },
    };
  }

  validate() {
    if(Array.isArray(this.dataFlow)) {
      $dara.Model.validateArray(this.dataFlow);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowsResponseBody extends $dara.Model {
  dataFlowInfo?: DescribeDataFlowsResponseBodyDataFlowInfo;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataFlowInfo: 'DataFlowInfo',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFlowInfo: DescribeDataFlowsResponseBodyDataFlowInfo,
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataFlowInfo && typeof (this.dataFlowInfo as any).validate === 'function') {
      (this.dataFlowInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

