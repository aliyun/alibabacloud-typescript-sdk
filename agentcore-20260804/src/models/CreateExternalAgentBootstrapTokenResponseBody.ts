// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExternalAgentBootstrapTokenResponseBodyDataCms extends $dara.Model {
  /**
   * @remarks
   * The CMS reporting endpoint.
   * 
   * @example
   * https://public.example.com/apm/trace/opentelemetry
   */
  endpoint?: string;
  /**
   * @remarks
   * The license key used for CMS connection.
   * 
   * @example
   * license-key
   */
  licenseKey?: string;
  /**
   * @remarks
   * The CMS workspace name.
   * 
   * @example
   * cms-workspace
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      licenseKey: 'licenseKey',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      licenseKey: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExternalAgentBootstrapTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The external agent ID.
   * 
   * @example
   * agent-1
   */
  agentId?: string;
  /**
   * @remarks
   * The Bootstrap Token used for connecting the external agent.
   * 
   * @example
   * bootstrap-token
   */
  bootstrapToken?: string;
  /**
   * @remarks
   * The CMS configuration used for connecting the external agent.
   */
  cms?: CreateExternalAgentBootstrapTokenResponseBodyDataCms;
  /**
   * @remarks
   * The network type for connection. Valid values:
   * - INTERNET: public network
   * - INTRANET: internal network
   * 
   * @example
   * INTERNET
   */
  networkType?: string;
  /**
   * @remarks
   * The fingerprint of the Bootstrap Token.
   * 
   * @example
   * fingerprint
   */
  tokenFingerprint?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-1
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      bootstrapToken: 'bootstrapToken',
      cms: 'cms',
      networkType: 'networkType',
      tokenFingerprint: 'tokenFingerprint',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      bootstrapToken: 'string',
      cms: CreateExternalAgentBootstrapTokenResponseBodyDataCms,
      networkType: 'string',
      tokenFingerprint: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.cms && typeof (this.cms as any).validate === 'function') {
      (this.cms as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExternalAgentBootstrapTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. The value SUCCESS indicates success.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The Bootstrap Token and CMS configuration required for connecting the external agent.
   */
  data?: CreateExternalAgentBootstrapTokenResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. The value 200 indicates success.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message indicating the request processing result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: CreateExternalAgentBootstrapTokenResponseBodyData,
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

