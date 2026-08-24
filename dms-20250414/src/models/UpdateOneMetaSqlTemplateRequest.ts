// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOneMetaSqlTemplateRequest extends $dara.Model {
  catalogUuid?: string;
  databaseUuid?: string;
  description?: string;
  expr?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  knowledgeUuid?: string;
  sqlParams?: string;
  tag?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      catalogUuid: 'CatalogUuid',
      databaseUuid: 'DatabaseUuid',
      description: 'Description',
      expr: 'Expr',
      knowledgeUuid: 'KnowledgeUuid',
      sqlParams: 'SqlParams',
      tag: 'Tag',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogUuid: 'string',
      databaseUuid: 'string',
      description: 'string',
      expr: 'string',
      knowledgeUuid: 'string',
      sqlParams: 'string',
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

