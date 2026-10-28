// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlgorithmsResponseBodyAlgorithms extends $dara.Model {
  /**
   * @remarks
   * The algorithm description.
   * 
   * @example
   * Large language model training
   */
  algorithmDescription?: string;
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
   * The display name of the algorithm.
   * 
   * @example
   * LLM Train
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the algorithm was created, in ISO 8601 format, in UTC.
   * 
   * @example
   * 2023-07-21T03:35:24Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the algorithm was last updated, in ISO 8601 format, in UTC.
   * 
   * @example
   * 2023-07-25T02:15:40Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The ID of the user to whom the algorithm belongs.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmDescription: 'AlgorithmDescription',
      algorithmId: 'AlgorithmId',
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmDescription: 'string',
      algorithmId: 'string',
      algorithmName: 'string',
      algorithmProvider: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The algorithm list.
   */
  algorithms?: ListAlgorithmsResponseBodyAlgorithms[];
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
   * The total number of algorithms.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      algorithms: 'Algorithms',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithms: { 'type': 'array', 'itemType': ListAlgorithmsResponseBodyAlgorithms },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.algorithms)) {
      $dara.Model.validateArray(this.algorithms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

