// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkReplStatementRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * >  You can call the [ListSparkApps](https://help.aliyun.com/document_detail/455888.html) operation to query Spark application IDs.
   * 
   * @example
   * s202411071444hzdvk486d9d200****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the session that executes the code.
   * 
   * @example
   * 1
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

