// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestModelProviderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error message. This parameter is returned when the test fails.
   * 
   * @example
   * The model provider returned an error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The number of input tokens.
   * 
   * @example
   * 10
   */
  inputTokens?: number;
  /**
   * @remarks
   * The call latency, in milliseconds.
   * 
   * @example
   * 500
   */
  latencyMs?: number;
  /**
   * @remarks
   * The number of output tokens.
   * 
   * @example
   * 20
   */
  outputTokens?: number;
  /**
   * @remarks
   * The response content returned by the model.
   * 
   * @example
   * I am fine, thank you!
   */
  response?: string;
  /**
   * @remarks
   * The test status.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the test was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      inputTokens: 'InputTokens',
      latencyMs: 'LatencyMs',
      outputTokens: 'OutputTokens',
      response: 'Response',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      inputTokens: 'number',
      latencyMs: 'number',
      outputTokens: 'number',
      response: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestModelProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {}
   */
  data?: TestModelProviderResponseBodyData;
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
   * Id of the request
   * 
   * @example
   * req-xxx
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
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: TestModelProviderResponseBodyData,
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

