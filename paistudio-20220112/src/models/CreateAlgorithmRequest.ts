// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlgorithmRequest extends $dara.Model {
  algorithmDescription?: string;
  /**
   * @example
   * llm_training
   */
  algorithmName?: string;
  displayName?: string;
  /**
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

