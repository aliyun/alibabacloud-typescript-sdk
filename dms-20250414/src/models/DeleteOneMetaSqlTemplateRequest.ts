// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOneMetaSqlTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * 86c5c290052147c***
   */
  knowledgeUuid?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeUuid: 'KnowledgeUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

