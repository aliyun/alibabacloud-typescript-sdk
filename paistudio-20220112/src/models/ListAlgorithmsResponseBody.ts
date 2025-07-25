// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlgorithmsResponseBodyAlgorithms extends $dara.Model {
  algorithmDescription?: string;
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
   * LLM Train
   */
  displayName?: string;
  /**
   * @example
   * 2023-07-21T03:35:24Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-07-25T02:15:40Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  /**
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
  algorithms?: ListAlgorithmsResponseBodyAlgorithms[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
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

