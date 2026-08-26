// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOneMetaSqlTemplateRequest extends $dara.Model {
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
   * The description of the SQL template.
   * 
   * @example
   * sales version 2
   */
  description?: string;
  /**
   * @remarks
   * The content of the SQL template.
   * 
   * @example
   * select count(1) from sales where dt = \\"2026-08-01\\"
   */
  expr?: string;
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
  /**
   * @remarks
   * The custom template parameters.
   * 
   * @example
   * {"dt": "2026-08-01"}
   */
  sqlParams?: string;
  /**
   * @remarks
   * The tag of the SQL template.
   * 
   * @example
   * new_sales
   */
  tag?: string;
  /**
   * @remarks
   * The title of the SQL template.
   * 
   * @example
   * sales_v2
   */
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

