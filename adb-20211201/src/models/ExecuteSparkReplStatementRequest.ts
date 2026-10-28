// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteSparkReplStatementRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * > You can call the [ListSparkApps](https://help.aliyun.com/document_detail/455888.html) operation to query the application ID of Spark.
   * 
   * @example
   * s202411071444hzdvk486d9d2001****
   */
  appId?: string;
  /**
   * @remarks
   * The code to execute.
   * 
   * This parameter is required.
   * 
   * @example
   * print(1+1)
   */
  code?: string;
  /**
   * @remarks
   * The language type of the code. Valid values:
   * - SCALA
   * - PYTHON
   * 
   * This parameter is required.
   * 
   * @example
   * PYTHON
   */
  codeType?: string;
  /**
   * @remarks
   * The session ID for executing the code.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  sessionId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      code: 'Code',
      codeType: 'CodeType',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      code: 'string',
      codeType: 'string',
      sessionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

