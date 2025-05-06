// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVocabRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-jhfr****8v
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

