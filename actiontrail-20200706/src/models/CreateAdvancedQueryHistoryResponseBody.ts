// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAdvancedQueryHistoryResponseBody extends $dara.Model {
  /**
   * @example
   * query-uIkIvLiVSuCKqg0yoa****
   */
  queryId?: string;
  /**
   * @example
   * event.userIdentity.accessKeyId: *
   */
  querySql?: string;
  /**
   * @example
   * D0227506-AA8C-5998-8A62-74769106****
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  simpleQuery?: boolean;
  static names(): { [key: string]: string } {
    return {
      queryId: 'QueryId',
      querySql: 'QuerySql',
      requestId: 'RequestId',
      simpleQuery: 'SimpleQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
      querySql: 'string',
      requestId: 'string',
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

