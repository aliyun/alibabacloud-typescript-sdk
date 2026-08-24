// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOneMetaOssieModelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  knowledgeUuid?: string;
  static names(): { [key: string]: string } {
    return {
      docFormat: 'DocFormat',
      knowledgeUuid: 'KnowledgeUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docFormat: 'string',
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

