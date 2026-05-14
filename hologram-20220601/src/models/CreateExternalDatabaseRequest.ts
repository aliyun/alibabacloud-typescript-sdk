// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateExternalDatabaseRequestExternalConfig extends $dara.Model {
  /**
   * @example
   * mc_project
   */
  key?: string;
  /**
   * @example
   * log_sum
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExternalDatabaseRequest extends $dara.Model {
  /**
   * @example
   * for log stat
   */
  comment?: string;
  /**
   * @example
   * my_db
   */
  databaseName?: string;
  /**
   * @example
   * true
   */
  defaultUserMapping?: string;
  externalConfig?: CreateExternalDatabaseRequestExternalConfig[];
  /**
   * @example
   * maxcompute
   */
  metastoreType?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      databaseName: 'databaseName',
      defaultUserMapping: 'defaultUserMapping',
      externalConfig: 'externalConfig',
      metastoreType: 'metastoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      databaseName: 'string',
      defaultUserMapping: 'string',
      externalConfig: { 'type': 'array', 'itemType': CreateExternalDatabaseRequestExternalConfig },
      metastoreType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.externalConfig)) {
      $dara.Model.validateArray(this.externalConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

