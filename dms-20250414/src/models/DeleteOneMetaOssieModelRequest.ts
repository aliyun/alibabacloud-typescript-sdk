// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOneMetaOssieModelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
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

