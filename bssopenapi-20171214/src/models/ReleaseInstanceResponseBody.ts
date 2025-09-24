// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The site of the execution host.
   * 
   * @example
   * cn
   */
  hostId?: string;
  /**
   * @remarks
   * Indicates whether the instance is released.
   * 
   * @example
   * true
   */
  releaseResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      releaseResult: 'ReleaseResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      releaseResult: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * Invalid_Product_Code
   */
  code?: string;
  /**
   * @remarks
   * data
   */
  data?: ReleaseInstanceResponseBodyData;
  /**
   * @remarks
   * The description of the execution result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request, which can be used for troubleshooting.
   * 
   * @example
   * UUID
   */
  requestId?: string;
  /**
   * @remarks
   * A value of true indicates that the execution is complete.
   * 
   * A value of false indicates that an error occurs during the execution.
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
      data: ReleaseInstanceResponseBodyData,
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

