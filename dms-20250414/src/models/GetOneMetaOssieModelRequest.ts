// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOneMetaOssieModelRequest extends $dara.Model {
  /**
   * @remarks
   * The document type of the semantic model. Valid values: JSON and YAML.
   * 
   * This parameter is required.
   * 
   * @example
   * JSON
   */
  docFormat?: string;
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

