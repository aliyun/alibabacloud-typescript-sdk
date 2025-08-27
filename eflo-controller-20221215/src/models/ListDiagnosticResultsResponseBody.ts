// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosticResultsResponseBodyDiagnosticResults extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i118578141694745246055
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster Name
   * 
   * @example
   * pjlab-lingjun
   */
  clusterName?: string;
  /**
   * @remarks
   * Creation time of the diagnostic task.
   * 
   * @example
   * 2024-01-15T02:01:12Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Diagnostic content. For example, in network diagnostics, there are static configuration checks, dynamic operation checks, and other diagnostic contents.
   * 
   * @example
   * diagcontent
   */
  diagContent?: string;
  /**
   * @remarks
   * Diagnosis ID
   * 
   * @example
   * 123
   */
  diagId?: string;
  /**
   * @remarks
   * Diagnostic result, either success or failure.
   * 
   * @example
   * Success
   */
  diagResult?: string;
  /**
   * @remarks
   * Completion time of the diagnostic task.
   * 
   * @example
   * 2024-10-16T02:04Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * e01-cn-bl03ofg6206
   */
  resourceId?: string;
  /**
   * @remarks
   * Server name.
   * 
   * @example
   * proxy-rps.mos.csvw.com
   */
  serverName?: string;
  /**
   * @remarks
   * Status of the diagnostic task. Possible values:
   * - InProgress: Diagnosing.
   * - Finished: Diagnosis completed.
   * - Failed: Diagnosis failed.
   * 
   * @example
   * succeed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      creationTime: 'CreationTime',
      diagContent: 'DiagContent',
      diagId: 'DiagId',
      diagResult: 'DiagResult',
      finishedTime: 'FinishedTime',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      creationTime: 'string',
      diagContent: 'string',
      diagId: 'string',
      diagResult: 'string',
      finishedTime: 'string',
      resourceId: 'string',
      serverName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnosticResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The diagnostic information.
   */
  diagnosticResults?: ListDiagnosticResultsResponseBodyDiagnosticResults[];
  /**
   * @remarks
   * Number of items per page in a paginated query. The maximum value is 100.
   * 
   * Default value:
   * 
   * - If no value is set or the set value is less than 20, the default value is 20.
   * - If the set value is greater than 100, the default value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * NextToken for the next page. Include this value when requesting the next page.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC4F0004-7BCE-52E0-891B-CAC7D64E3368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosticResults: 'DiagnosticResults',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosticResults: { 'type': 'array', 'itemType': ListDiagnosticResultsResponseBodyDiagnosticResults },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnosticResults)) {
      $dara.Model.validateArray(this.diagnosticResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

