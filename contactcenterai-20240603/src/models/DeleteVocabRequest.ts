// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVocabRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ern*******rve
   */
  vocabularyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-0*****jlg8s
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      vocabularyId: 'vocabularyId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vocabularyId: 'string',
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

