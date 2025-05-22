// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSubscriptionInstanceRequestSubscriptionDataType extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to track DDL statements. Default value: true. Valid values:
   * 
   * *   **true**: tracks DDL statements.
   * *   **false**: does not track DDL statements.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  DDL?: boolean;
  /**
   * @remarks
   * Specifies whether to track DML statements. Default value: true. Valid values:
   * 
   * *   **true**: tracks DML statements.
   * *   **false**: does not track DML statements.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  DML?: boolean;
  static names(): { [key: string]: string } {
    return {
      DDL: 'DDL',
      DML: 'DML',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDL: 'boolean',
      DML: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

