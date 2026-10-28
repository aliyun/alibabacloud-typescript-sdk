// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlgorithmsRequest extends $dara.Model {
  /**
   * @remarks
   * The algorithm ID.
   * 
   * @example
   * algo-xsldfvu1334
   */
  algorithmId?: string;
  /**
   * @remarks
   * The algorithm name.
   * 
   * @example
   * llm_training
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      algorithmId: 'AlgorithmId',
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmName: 'string',
      algorithmProvider: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

