// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelSqlPreviewRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 19426537348647121698828223472
   */
  queryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-session
   */
  sessionClusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a737f33bbdb7419db9ee8037bb51e73a
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

