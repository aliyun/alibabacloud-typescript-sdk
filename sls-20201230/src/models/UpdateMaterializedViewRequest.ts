// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMaterializedViewRequest extends $dara.Model {
  /**
   * @remarks
   * The refresh interval of the materialized view, in minutes.
   */
  aggIntervalMins?: number;
  /**
   * @remarks
   * Specifies whether to automatically refresh the materialized view.
   */
  enable?: boolean;
  /**
   * @remarks
   * The new SQL query for the materialized view. Updating the query rebuilds the view.
   */
  originalSql?: string;
  /**
   * @remarks
   * The data retention period (TTL) of the materialized view, in days.
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      aggIntervalMins: 'aggIntervalMins',
      enable: 'enable',
      originalSql: 'originalSql',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggIntervalMins: 'number',
      enable: 'boolean',
      originalSql: 'string',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

