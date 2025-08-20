// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Adb4MysqlSparkDiagnosisInfo } from "./Adb4mysqlSparkDiagnosisInfo";
import { OperatorNode } from "./OperatorNode";
import { SparkOperatorInfo } from "./SparkOperatorInfo";


export class DescribeSparkSQLDiagnosisAttributeResponseBodyOperatorListSortedByMetrics extends $dara.Model {
  /**
   * @remarks
   * The operators sorted by the execution duration.
   */
  operatorListSortedByExclusiveTime?: SparkOperatorInfo[];
  /**
   * @remarks
   * The operators sorted by the maximum memory used.
   */
  operatorListSortedByMaxMemory?: SparkOperatorInfo[];
  static names(): { [key: string]: string } {
    return {
      operatorListSortedByExclusiveTime: 'OperatorListSortedByExclusiveTime',
      operatorListSortedByMaxMemory: 'OperatorListSortedByMaxMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorListSortedByExclusiveTime: { 'type': 'array', 'itemType': SparkOperatorInfo },
      operatorListSortedByMaxMemory: { 'type': 'array', 'itemType': SparkOperatorInfo },
    };
  }

  validate() {
    if(Array.isArray(this.operatorListSortedByExclusiveTime)) {
      $dara.Model.validateArray(this.operatorListSortedByExclusiveTime);
    }
    if(Array.isArray(this.operatorListSortedByMaxMemory)) {
      $dara.Model.validateArray(this.operatorListSortedByMaxMemory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSparkSQLDiagnosisAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the request denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * >  You can call the [ListSparkApps](https://help.aliyun.com/document_detail/612475.html) operation to query a list of Spark application IDs.
   * 
   * @example
   * s202411071444hzdvk486d9d2001****
   */
  appId?: string;
  /**
   * @remarks
   * The queried diagnostic information.
   */
  diagnosisInfos?: Adb4MysqlSparkDiagnosisInfo[];
  /**
   * @remarks
   * The execution duration of the query. Unit: milliseconds.
   * 
   * @example
   * 100
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The ID of the query executed within the Spark application.
   * 
   * @example
   * 1
   */
  innerQueryId?: number;
  /**
   * @remarks
   * The operators sorted by metrics.
   */
  operatorListSortedByMetrics?: DescribeSparkSQLDiagnosisAttributeResponseBodyOperatorListSortedByMetrics;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The Spark execution plan tree.
   */
  root?: OperatorNode;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      appId: 'AppId',
      diagnosisInfos: 'DiagnosisInfos',
      elapsedTime: 'ElapsedTime',
      innerQueryId: 'InnerQueryId',
      operatorListSortedByMetrics: 'OperatorListSortedByMetrics',
      requestId: 'RequestId',
      root: 'Root',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      appId: 'string',
      diagnosisInfos: { 'type': 'array', 'itemType': Adb4MysqlSparkDiagnosisInfo },
      elapsedTime: 'number',
      innerQueryId: 'number',
      operatorListSortedByMetrics: DescribeSparkSQLDiagnosisAttributeResponseBodyOperatorListSortedByMetrics,
      requestId: 'string',
      root: OperatorNode,
    };
  }

  validate() {
    if(Array.isArray(this.diagnosisInfos)) {
      $dara.Model.validateArray(this.diagnosisInfos);
    }
    if(this.operatorListSortedByMetrics && typeof (this.operatorListSortedByMetrics as any).validate === 'function') {
      (this.operatorListSortedByMetrics as any).validate();
    }
    if(this.root && typeof (this.root as any).validate === 'function') {
      (this.root as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

