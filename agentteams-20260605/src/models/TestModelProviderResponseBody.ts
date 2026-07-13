// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestModelProviderResponseBodyData extends $dara.Model {
  errorMessage?: string;
  inputTokens?: number;
  latencyMs?: number;
  outputTokens?: number;
  response?: string;
  status?: string;
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
  code?: string;
  data?: TestModelProviderResponseBodyData;
  message?: string;
  requestId?: string;
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

