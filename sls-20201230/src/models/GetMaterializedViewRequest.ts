// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMaterializedViewRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the materialized view status information.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * false
   */
  returnStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      returnStatus: 'returnStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      returnStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

