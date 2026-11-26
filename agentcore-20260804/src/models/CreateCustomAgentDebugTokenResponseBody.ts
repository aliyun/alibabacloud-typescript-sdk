// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAgentDebugTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the high-code agent corresponding to the token.
   * 
   * @example
   * agent-0123456789abcdef0123456789abcdef
   */
  agentId?: string;
  /**
   * @remarks
   * The token used by the AgentCore SDK for local debugging. Keep the token secure. Do not write it to logs or commit it to code repositories.
   * 
   * @example
   * eyJwcm9kdWN0****
   */
  bootstrapToken?: string;
  /**
   * @remarks
   * The network type used by the token, which is the same as the networkType parameter in the request.
   * 
   * @example
   * INTERNET
   */
  networkType?: string;
  /**
   * @remarks
   * The fingerprint used to identify the issued token. You can use the fingerprint to troubleshoot issuance records.
   * 
   * @example
   * c4f5b8813a0d
   */
  tokenFingerprint?: string;
  /**
   * @remarks
   * The ID of the workspace corresponding to the token.
   * 
   * @example
   * ws-0123456789abcdef01234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      bootstrapToken: 'bootstrapToken',
      networkType: 'networkType',
      tokenFingerprint: 'tokenFingerprint',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      bootstrapToken: 'string',
      networkType: 'string',
      tokenFingerprint: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomAgentDebugTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. SUCCESS is returned if the call succeeds.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The debugging token, token fingerprint, and the corresponding resource and network information issued in this request.
   */
  data?: CreateCustomAgentDebugTokenResponseBodyData;
  /**
   * @remarks
   * The HTTP status code of the request.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The description of the request result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * F2B17684-703A-4F29-9D14-30C334A85162
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateCustomAgentDebugTokenResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

