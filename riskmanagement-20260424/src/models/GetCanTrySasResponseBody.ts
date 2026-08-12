// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCanTrySasResponseBodyDataBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the user is eligible for a free trial. Valid values:
   * - **1**: Eligible.
   * - **0**: Not eligible.
   * 
   * @example
   * 1
   */
  canTry?: number;
  /**
   * @remarks
   * The list of editions available for trial.
   */
  canTryVersions?: number[];
  /**
   * @remarks
   * The trial type. Valid values:
   * - **0**: Trial is not allowed.
   * - **1**: First trial.
   * - **2**: Second trial.
   * 
   * @example
   * 1
   */
  tryType?: number;
  static names(): { [key: string]: string } {
    return {
      canTry: 'CanTry',
      canTryVersions: 'CanTryVersions',
      tryType: 'TryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canTry: 'number',
      canTryVersions: { 'type': 'array', 'itemType': 'number' },
      tryType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.canTryVersions)) {
      $dara.Model.validateArray(this.canTryVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCanTrySasResponseBodyDataBody extends $dara.Model {
  /**
   * @remarks
   * The data.
   */
  data?: GetCanTrySasResponseBodyDataBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0EBD97B8-65AD-52C8-94D5-A0F81E7D70D0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetCanTrySasResponseBodyDataBodyData,
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

export class GetCanTrySasResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The message body.
   */
  body?: GetCanTrySasResponseBodyDataBody;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetCanTrySasResponseBodyDataBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCanTrySasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The detailed information.
   */
  data?: GetCanTrySasResponseBodyData;
  /**
   * @remarks
   * The message. The value is the same as the Code parameter value.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6B48613E-86DE-5411-BDBE-429C80B45F3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current API call is successful. This does not indicate whether subsequent business operations are successful.
   * 
   * - **true**: Successful.
   * - **false**: Failed.
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
      data: GetCanTrySasResponseBodyData,
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

