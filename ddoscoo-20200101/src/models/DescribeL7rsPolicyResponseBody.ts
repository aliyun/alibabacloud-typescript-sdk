// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeL7RsPolicyResponseBodyAttributesAttribute extends $dara.Model {
  connectTimeout?: number;
  failTimeout?: number;
  maxFails?: number;
  mode?: string;
  readTimeout?: number;
  sendTimeout?: number;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      connectTimeout: 'ConnectTimeout',
      failTimeout: 'FailTimeout',
      maxFails: 'MaxFails',
      mode: 'Mode',
      readTimeout: 'ReadTimeout',
      sendTimeout: 'SendTimeout',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectTimeout: 'number',
      failTimeout: 'number',
      maxFails: 'number',
      mode: 'string',
      readTimeout: 'number',
      sendTimeout: 'number',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL7RsPolicyResponseBodyAttributes extends $dara.Model {
  attribute?: DescribeL7RsPolicyResponseBodyAttributesAttribute;
  realServer?: string;
  rsType?: number;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      realServer: 'RealServer',
      rsType: 'RsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: DescribeL7RsPolicyResponseBodyAttributesAttribute,
      realServer: 'string',
      rsType: 'number',
    };
  }

  validate() {
    if(this.attribute && typeof (this.attribute as any).validate === 'function') {
      (this.attribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeL7RsPolicyResponseBody extends $dara.Model {
  attributes?: DescribeL7RsPolicyResponseBodyAttributes[];
  proxyMode?: string;
  requestId?: string;
  rsAttrRwTimeoutMax?: number;
  upstreamRetry?: number;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      proxyMode: 'ProxyMode',
      requestId: 'RequestId',
      rsAttrRwTimeoutMax: 'RsAttrRwTimeoutMax',
      upstreamRetry: 'UpstreamRetry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': DescribeL7RsPolicyResponseBodyAttributes },
      proxyMode: 'string',
      requestId: 'string',
      rsAttrRwTimeoutMax: 'number',
      upstreamRetry: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

