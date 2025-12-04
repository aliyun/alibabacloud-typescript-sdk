// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubnetResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun subnet instance ID
   * 
   * @example
   * subnet-yuvn29bn
   */
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subnetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubnetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the failed permission verification.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: CreateSubnetResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * A88DFED5-24B7-5A3E-87DE-380BF06F3C90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: CreateSubnetResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

