// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDifyEditionsResponseBodyData extends $dara.Model {
  community?: string[];
  enterprise?: string[];
  openCommunity?: string[];
  static names(): { [key: string]: string } {
    return {
      community: 'Community',
      enterprise: 'Enterprise',
      openCommunity: 'OpenCommunity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      community: { 'type': 'array', 'itemType': 'string' },
      enterprise: { 'type': 'array', 'itemType': 'string' },
      openCommunity: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.community)) {
      $dara.Model.validateArray(this.community);
    }
    if(Array.isArray(this.enterprise)) {
      $dara.Model.validateArray(this.enterprise);
    }
    if(Array.isArray(this.openCommunity)) {
      $dara.Model.validateArray(this.openCommunity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDifyEditionsResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeDifyEditionsResponseBodyData;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeDifyEditionsResponseBodyData,
      errorCode: 'string',
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

