// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchSqlPreviewResultsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 00000000-0000-0000-0000-00000022****
   */
  queryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * session-test
   */
  sessionClusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 00000000-0000-0000-0000-00000033****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'queryId',
      sessionClusterName: 'sessionClusterName',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
      sessionClusterName: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

