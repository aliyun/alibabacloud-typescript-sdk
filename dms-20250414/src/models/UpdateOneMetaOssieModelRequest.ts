// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOneMetaOssieModelRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the associated folder.
   * 
   * @example
   * mc-HZ-OfjcNc2z***
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The UUID of the associated database.
   * 
   * @example
   * md-HZ-fp9K7r***
   */
  databaseUuid?: string;
  /**
   * @remarks
   * The semantic description.
   * 
   * @example
   * Order summary
   */
  description?: string;
  /**
   * @remarks
   * The document type of the semantic model. Valid values:
   * 
   * - JSON
   * - YAML
   * 
   * @example
   * JSON
   */
  docFormat?: string;
  /**
   * @remarks
   * The document definition of the semantic model.
   * 
   * @example
   * {
   *   "version": "0.2.0.dev0",
   *   "semantic_model": [
   *     {
   *       "name": "sales",
   *       "datasets": [
   *         {
   *           "name": "orders",
   *           "source": "analytics.public.orders"
   *         }
   *       ]
   *     }
   *   ]
   * }
   */
  document?: string;
  /**
   * @remarks
   * The UUID of the knowledge.
   * 
   * This parameter is required.
   * 
   * @example
   * 86c5c290052147c***
   */
  knowledgeUuid?: string;
  /**
   * @remarks
   * The tag of the semantic model.
   * 
   * @example
   * sales
   */
  tag?: string;
  /**
   * @remarks
   * The semantic title.
   * 
   * @example
   * Order total
   */
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

