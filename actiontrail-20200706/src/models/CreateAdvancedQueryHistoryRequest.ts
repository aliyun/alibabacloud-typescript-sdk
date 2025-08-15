// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAdvancedQueryHistoryRequest extends $dara.Model {
  /**
   * @example
   * event.userIdentity.accessKeyId: *
   */
  querySql?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  simpleQuery?: boolean;
  static names(): { [key: string]: string } {
    return {
      querySql: 'QuerySql',
      simpleQuery: 'SimpleQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      querySql: 'string',
      simpleQuery: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

