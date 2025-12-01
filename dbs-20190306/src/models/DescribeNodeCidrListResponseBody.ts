// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeCidrListResponseBodyInternetIPs extends $dara.Model {
  internetIP?: string[];
  static names(): { [key: string]: string } {
    return {
      internetIP: 'InternetIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetIP: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.internetIP)) {
      $dara.Model.validateArray(this.internetIP);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeCidrListResponseBodyIntranetIPs extends $dara.Model {
  intranetIP?: string[];
  static names(): { [key: string]: string } {
    return {
      intranetIP: 'IntranetIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intranetIP: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.intranetIP)) {
      $dara.Model.validateArray(this.intranetIP);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeCidrListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Param.NotFound
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
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
   * The public CIDR blocks.
   */
  internetIPs?: DescribeNodeCidrListResponseBodyInternetIPs;
  /**
   * @remarks
   * The internal CIDR blocks.
   */
  intranetIPs?: DescribeNodeCidrListResponseBodyIntranetIPs;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5B352E69-E7B1-4EA7-BB8E-29FFE969C791
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      internetIPs: 'InternetIPs',
      intranetIPs: 'IntranetIPs',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      internetIPs: DescribeNodeCidrListResponseBodyInternetIPs,
      intranetIPs: DescribeNodeCidrListResponseBodyIntranetIPs,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.internetIPs && typeof (this.internetIPs as any).validate === 'function') {
      (this.internetIPs as any).validate();
    }
    if(this.intranetIPs && typeof (this.intranetIPs as any).validate === 'function') {
      (this.intranetIPs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

