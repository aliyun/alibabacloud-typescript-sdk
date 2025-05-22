// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailResponseBodySubscriptionDataType extends $dara.Model {
  /**
   * @remarks
   * Indicates whether DDL statements are tracked. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  ddl?: boolean;
  /**
   * @remarks
   * Indicates whether DML statements are tracked. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  dml?: boolean;
  static names(): { [key: string]: string } {
    return {
      ddl: 'Ddl',
      dml: 'Dml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddl: 'boolean',
      dml: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

