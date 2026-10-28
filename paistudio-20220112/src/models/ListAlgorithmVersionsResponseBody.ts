// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlgorithmVersionsResponseBodyAlgorithmVersions extends $dara.Model {
  /**
   * @remarks
   * The algorithm ID.
   * 
   * @example
   * algo-sidjc8134hv
   */
  algorithmId?: string;
  /**
   * @remarks
   * The algorithm name.
   * 
   * @example
   * llm_train
   */
  algorithmName?: string;
  /**
   * @remarks
   * The algorithm provider.
   * 
   * @example
   * pai
   */
  algorithmProvider?: string;
  /**
   * @remarks
   * The algorithm version.
   * 
   * @example
   * v0.1.0
   */
  algorithmVersion?: string;
  /**
   * @remarks
   * The time when the algorithm was created, in ISO 8601 format, in UTC.
   * 
   * @example
   * 2024-01-19T02:00:26Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the algorithm was last updated, in ISO 8601 format, in UTC.
   * 
   * @example
   * 2024-01-22T02:00:59Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The ID of the tenant to which the algorithm belongs.
   * 
   * @example
   * 123456789
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the user to which the algorithm belongs.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmVersion: 'AlgorithmVersion',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      tenantId: 'TenantId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmVersion: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of algorithm version details.
   */
  algorithmVersions?: ListAlgorithmVersionsResponseBodyAlgorithmVersions[];
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
   * The total number of algorithm versions.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      algorithmVersions: 'AlgorithmVersions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmVersions: { 'type': 'array', 'itemType': ListAlgorithmVersionsResponseBodyAlgorithmVersions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.algorithmVersions)) {
      $dara.Model.validateArray(this.algorithmVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

