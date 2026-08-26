// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportOneMetaOssieModelRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the associated folder.
   * 
   * This parameter is required.
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
   * The semantic model document type. Valid values: JSON and YAML.
   * 
   * This parameter is required.
   * 
   * @example
   * JSON
   */
  docFormat?: string;
  /**
   * @remarks
   * The semantic model document definition.
   * 
   * This parameter is required.
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
   * The source of the semantic model.
   * 
   * This parameter is required.
   * 
   * @example
   * DATA_AGENT
   */
  source?: string;
  /**
   * @remarks
   * The semantic model tag.
   * 
   * @example
   * new_sales
   */
  tag?: string;
  /**
   * @remarks
   * The semantic title. If the value is empty, the title is extracted from the document.
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
      source: 'Source',
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
      source: 'string',
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

