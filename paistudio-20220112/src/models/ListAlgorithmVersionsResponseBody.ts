// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlgorithmVersionsResponseBodyAlgorithmVersions extends $dara.Model {
  /**
   * @example
   * algo-sidjc8134hv
   */
  algorithmId?: string;
  /**
   * @example
   * llm_train
   */
  algorithmName?: string;
  /**
   * @example
   * pai
   */
  algorithmProvider?: string;
  /**
   * @example
   * v0.1.0
   */
  algorithmVersion?: string;
  /**
   * @example
   * 2024-01-19T02:00:26Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2024-01-22T02:00:59Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 123456789
   */
  tenantId?: string;
  /**
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
  algorithmVersions?: ListAlgorithmVersionsResponseBodyAlgorithmVersions[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
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

