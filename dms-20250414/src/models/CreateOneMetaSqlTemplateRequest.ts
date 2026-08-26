// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOneMetaSqlTemplateRequest extends $dara.Model {
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
   * sales template
   */
  description?: string;
  /**
   * @remarks
   * The content of the SQL template.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT SUM(amount) AS total_sales FROM store_daily_sales
   */
  expr?: string;
  /**
   * @remarks
   * The knowledge source of the SQL template.
   * 
   * This parameter is required.
   * 
   * @example
   * DATA_AGENT
   */
  source?: string;
  /**
   * @remarks
   * The custom template parameters.
   * 
   * @example
   * {"start_day_id": "2026-08-01", "end_day_id": "2026-08-16"}
   */
  sqlParams?: string;
  /**
   * @remarks
   * The tag of the SQL template.
   * 
   * @example
   * sales
   */
  tag?: string;
  /**
   * @remarks
   * The title of the SQL template.
   * 
   * This parameter is required.
   * 
   * @example
   * ecommerce_sales
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      catalogUuid: 'CatalogUuid',
      databaseUuid: 'DatabaseUuid',
      description: 'Description',
      expr: 'Expr',
      source: 'Source',
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
      source: 'string',
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

