// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlgorithmRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the algorithm.
   * 
   * @example
   * Tongyi Qwen large language model training algorithm.
   */
  algorithmDescription?: string;
  /**
   * @remarks
   * The name of the algorithm.
   * 
   * @example
   * llm_training
   */
  algorithmName?: string;
  /**
   * @remarks
   * The display name of the algorithm.
   * 
   * @example
   * Large language model training
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmDescription: 'AlgorithmDescription',
      algorithmName: 'AlgorithmName',
      displayName: 'DisplayName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmDescription: 'string',
      algorithmName: 'string',
      displayName: 'string',
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

