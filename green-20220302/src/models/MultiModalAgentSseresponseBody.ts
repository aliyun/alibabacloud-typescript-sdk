// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalAgentSSEResponseBodyDataUsage extends $dara.Model {
  /**
   * @remarks
   * The number of credits consumed.
   * 
   * @example
   * 1.23
   */
  credits?: number;
  static names(): { [key: string]: string } {
    return {
      credits: 'Credits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credits: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalAgentSSEResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the session was created.
   * 
   * @example
   * 1783328536
   */
  created?: number;
  /**
   * @remarks
   * The value of DataId passed in the API request. This field is not returned if DataId is not specified in the request.
   * 
   * @example
   * dataId-XXX
   */
  dataId?: string;
  /**
   * @remarks
   * For streaming output, this value is null during generation. When generation ends, the value is stop if the generation stopped due to a stop token.
   * 
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @remarks
   * The output result.
   * 
   * @example
   * "Violation, reason XX"
   */
  output?: string;
  /**
   * @remarks
   * The credits usage information.
   */
  usage?: MultiModalAgentSSEResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      created: 'Created',
      dataId: 'DataId',
      finishReason: 'FinishReason',
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      dataId: 'string',
      finishReason: 'string',
      output: 'string',
      usage: MultiModalAgentSSEResponseBodyDataUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalAgentSSEResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: MultiModalAgentSSEResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: MultiModalAgentSSEResponseBodyData,
      message: 'string',
      requestId: 'string',
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

