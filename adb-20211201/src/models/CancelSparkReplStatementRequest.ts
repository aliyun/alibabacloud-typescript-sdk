// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelSparkReplStatementRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * >  You can call the [ListSparkApps](https://help.aliyun.com/document_detail/455888.html) operation to query Spark application IDs.
   * 
   * @example
   * s202411071444hzdvk486d9d2001****
   */
  appId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 456
   */
  sessionId?: number;
  /**
   * @remarks
   * The unique ID of the code block in the Spark job.
   * 
   * @example
   * 123
   */
  statementId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      sessionId: 'SessionId',
      statementId: 'StatementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      sessionId: 'number',
      statementId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

