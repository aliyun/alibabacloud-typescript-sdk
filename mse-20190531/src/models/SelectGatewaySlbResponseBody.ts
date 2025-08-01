// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectGatewaySlbResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * @example
   * lb-bp14lqiw5n96hq2****
   */
  slbId?: string;
  /**
   * @remarks
   * The name of the SLB instance.
   * 
   * @example
   * MseGatewaySlb-gw
   */
  slbName?: string;
  static names(): { [key: string]: string } {
    return {
      slbId: 'SlbId',
      slbName: 'SlbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbId: 'string',
      slbName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectGatewaySlbResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data structure.
   */
  data?: SelectGatewaySlbResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E00C6D90-A28A-5813-8981-0459AA436F46
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': SelectGatewaySlbResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

