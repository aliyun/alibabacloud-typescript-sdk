// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosticResultsResponseBodyDiagnosticResults extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i11857814169474524****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * pjlab-lingjun
   */
  clusterName?: string;
  /**
   * @remarks
   * The time when the diagnostic task was created. The time is in ISO 8601 format. Z in the example indicates UTC.
   * 
   * @example
   * 2024-01-15T02:01:12Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The diagnostic content. For example, in the network diagnostic type, the diagnostic content includes static configuration checks and dynamic runtime checks.
   * 
   * @example
   * Test diagnostic information
   */
  diagContent?: string;
  /**
   * @remarks
   * The diagnostic ID.
   * 
   * @example
   * 123
   */
  diagId?: string;
  /**
   * @remarks
   * The diagnostic result, which indicates success or failure.
   * 
   * @example
   * Success
   */
  diagResult?: string;
  /**
   * @remarks
   * The time when the diagnostic task was completed. The time is in ISO 8601 format. Z in the example indicates UTC.
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
   * e01-cn-bl03ofg6****
   */
  resourceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * proxy-rps.mos.csvw.com
   */
  serverName?: string;
  /**
   * @remarks
   * The governance status.
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
   * The number of entries per page in a paged query. Maximum value: 100.
   * 
   * Default value:
   * 
   * - If this parameter is not specified or is set to a value less than 20, the default value is 20.
   * 
   * - If this parameter is set to a value greater than 100, the default value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The NextToken for the next page. Include this value when you request the next page.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120****
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

