// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CodeInterpreterSessionOut extends $dara.Model {
  /**
   * @remarks
   * The Unique Identifier of the associated code interpreter
   * 
   * This parameter is required.
   */
  codeInterpreterId?: string;
  /**
   * @remarks
   * The name of the code interpreter session
   */
  codeInterpreterName?: string;
  /**
   * @remarks
   * The creation time of the code interpreter session, in ISO 8601 format
   */
  createdAt?: string;
  /**
   * @remarks
   * The last update time of the code interpreter session, in ISO 8601 format
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * The Unique Identifier of the code interpreter session
   * 
   * This parameter is required.
   */
  sessionId?: string;
  /**
   * @remarks
   * The idle timeout duration of the code interpreter session, in seconds. After the instance receives no session requests, it enters an idle state, which is billed under the idle billing model. If the idle duration exceeds this timeout, the session automatically expires and can no longer be used.
   */
  sessionIdleTimeoutSeconds?: number;
  /**
   * @remarks
   * The current status of the code interpreter session
   * 
   * This parameter is required.
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      codeInterpreterId: 'codeInterpreterId',
      codeInterpreterName: 'codeInterpreterName',
      createdAt: 'createdAt',
      lastUpdatedAt: 'lastUpdatedAt',
      sessionId: 'sessionId',
      sessionIdleTimeoutSeconds: 'sessionIdleTimeoutSeconds',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeInterpreterId: 'string',
      codeInterpreterName: 'string',
      createdAt: 'string',
      lastUpdatedAt: 'string',
      sessionId: 'string',
      sessionIdleTimeoutSeconds: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

