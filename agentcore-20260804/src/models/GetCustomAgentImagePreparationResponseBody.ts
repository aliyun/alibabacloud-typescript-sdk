// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomAgentImagePreparationResponseBodyDataError extends $dara.Model {
  /**
   * @remarks
   * The business error code for image preparation. This code is used to identify the failure type. For the specific cause, refer to the message.
   * 
   * @example
   * ImageSyncFailed
   */
  code?: string;
  /**
   * @remarks
   * The specific cause of the failure. This may include underlying errors such as image not found, authentication failure, network timeout, or certificate verification error. Passwords, tokens, or authentication headers are not returned. If the underlying system does not provide a cause, a general description is returned.
   * 
   * @example
   * tls: failed to verify certificate: x509: certificate signed by unknown authority
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomAgentImagePreparationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The target agent ID.
   * 
   * @example
   * agent-example
   */
  agentId?: string;
  /**
   * @remarks
   * The error information. This field is returned only when the task fails. Otherwise, the value is null.
   */
  error?: GetCustomAgentImagePreparationResponseBodyDataError;
  /**
   * @remarks
   * The failed phase. This field is returned only when the status is FAILED. Otherwise, the value is null.
   * 
   * @example
   * COPYING
   */
  failedPhase?: string;
  /**
   * @remarks
   * The current phase. Only SUCCEEDED indicates that the deployment of the target version is successful.
   * 
   * @example
   * FAILED
   */
  phase?: string;
  /**
   * @remarks
   * The console submission task ID.
   * 
   * @example
   * agent-example:1
   */
  preparationId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      error: 'error',
      failedPhase: 'failedPhase',
      phase: 'phase',
      preparationId: 'preparationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      error: GetCustomAgentImagePreparationResponseBodyDataError,
      failedPhase: 'string',
      phase: 'string',
      preparationId: 'string',
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomAgentImagePreparationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The preparation query result. Refer to the phase for the asynchronous execution status.
   */
  data?: GetCustomAgentImagePreparationResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
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
   * 123e4567-e89b-12d3-a456-426614174000
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful.
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
      data: GetCustomAgentImagePreparationResponseBodyData,
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

