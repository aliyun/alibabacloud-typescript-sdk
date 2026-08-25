// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCredentialResponseBodyData extends $dara.Model {
  /**
   * @example
   * cred-123456
   */
  credentialId?: string;
  /**
   * @example
   * model-api-key
   */
  name?: string;
  /**
   * @example
   * ws-123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialId: 'credentialId',
      name: 'name',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialId: 'string',
      name: 'string',
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

export class DeleteCredentialResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  data?: DeleteCredentialResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * request-123456
   */
  requestId?: string;
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
      data: DeleteCredentialResponseBodyData,
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

