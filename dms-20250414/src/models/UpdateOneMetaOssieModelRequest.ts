// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOneMetaOssieModelRequest extends $dara.Model {
  catalogUuid?: string;
  databaseUuid?: string;
  description?: string;
  docFormat?: string;
  document?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  knowledgeUuid?: string;
  tag?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      catalogUuid: 'CatalogUuid',
      databaseUuid: 'DatabaseUuid',
      description: 'Description',
      docFormat: 'DocFormat',
      document: 'Document',
      knowledgeUuid: 'KnowledgeUuid',
      tag: 'Tag',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogUuid: 'string',
      databaseUuid: 'string',
      description: 'string',
      docFormat: 'string',
      document: 'string',
      knowledgeUuid: 'string',
      tag: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

