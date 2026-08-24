// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOneMetaSqlTemplateRequest extends $dara.Model {
  /**
   * @example
   * mc-HZ-OfjcNc2z***
   */
  catalogUuid?: string;
  /**
   * @example
   * md-HZ-fp9K7r***
   */
  databaseUuid?: string;
  /**
   * @example
   * sales template
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SELECT SUM(amount) AS total_sales FROM store_daily_sales
   */
  expr?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DATA_AGENT
   */
  source?: string;
  /**
   * @example
   * {"start_day_id": "2026-08-01", "end_day_id": "2026-08-16"}
   */
  sqlParams?: string;
  /**
   * @example
   * sales
   */
  tag?: string;
  /**
   * @remarks
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

