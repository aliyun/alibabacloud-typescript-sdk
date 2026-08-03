// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAdvancedQueryHistoryResponseBody extends $dara.Model {
  dryRunResult?: string;
  /**
   * @remarks
   * The ID of the advanced event query record.
   * 
   * @example
   * query-uIkIvLiVSuCKqg0yoa****
   */
  queryId?: string;
  /**
   * @remarks
   * The advanced event query statement.
   * 
   * @example
   * event.userIdentity.accessKeyId: *
   */
  querySql?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0227506-AA8C-5998-8A62-74769106****
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether to enable the simple query mode.
   * 
   * @example
   * false
   */
  simpleQuery?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      queryId: 'QueryId',
      querySql: 'QuerySql',
      requestId: 'RequestId',
      simpleQuery: 'SimpleQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: 'string',
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

