// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OneMetaSqlTemplateView extends $dara.Model {
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
   * sales count
   */
  description?: string;
  /**
   * @remarks
   * The content of the SQL template.
   * 
   * @example
   * SELECT store_name, daily_sales FROM store_daily_sales ORDER BY daily_sales DESC LIMIT 5
   */
  expr?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1787302285000
   */
  gmtCreated?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1787302285000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The UUID of the knowledge.
   * 
   * @example
   * 86c5c290052147c***
   */
  knowledgeUuid?: string;
  /**
   * @remarks
   * The source of the SQL template knowledge.
   * 
   * @example
   * DATA_AGENT
   */
  source?: string;
  /**
   * @remarks
   * The parameters of the SQL template.
   * 
   * @example
   * {"dt": "2026-08-01"}
   */
  sqlParams?: string;
  /**
   * @remarks
   * The summary of the SQL template.
   * 
   * @example
   * sales summary
   */
  summary?: string;
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
   * ecommerce_sales
   */
  title?: string;
  /**
   * @remarks
   * The version of the SQL template.
   * 
   * @example
   * 0.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      catalogUuid: 'CatalogUuid',
      databaseUuid: 'DatabaseUuid',
      description: 'Description',
      expr: 'Expr',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      knowledgeUuid: 'KnowledgeUuid',
      source: 'Source',
      sqlParams: 'SqlParams',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogUuid: 'string',
      databaseUuid: 'string',
      description: 'string',
      expr: 'string',
      gmtCreated: 'number',
      gmtModified: 'number',
      knowledgeUuid: 'string',
      source: 'string',
      sqlParams: 'string',
      summary: 'string',
      tag: 'string',
      title: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

