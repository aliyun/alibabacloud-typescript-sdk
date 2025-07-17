// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudClusterAllUrlResponseBodyDataRemoteUrl extends $dara.Model {
  /**
   * @remarks
   * Indicates whether authentication is enabled.
   * 
   * @example
   * true
   */
  authToken?: boolean;
  /**
   * @remarks
   * The internal URL for Grafana.
   * 
   * @example
   * "http://cn-hangzhou-intranet.arms.aliyuncs.com:9090/api/v1/prometheus/XXXXXXXXXXXXXXXXX"
   */
  grafanaUrl?: string;
  /**
   * @remarks
   * The public URL for Grafana.
   * 
   * @example
   * "http://cn-hangzhou.arms.aliyuncs.com:9090/api/v1/prometheus/XXXXXXXXXXXXXXXXX"
   */
  internetGrafanaUrl?: string;
  /**
   * @remarks
   * The public URL for Pushgateway.
   * 
   * @example
   * "http://cn-hangzhou.arms.aliyuncs.com:9090/api/v1/prometheus/XXXXXXXXXXXXXXXXX"
   */
  internetPushGatewayUrl?: string;
  /**
   * @remarks
   * The public URL for remote read.
   * 
   * @example
   * "http://cn-hangzhou.arms.aliyuncs.com:9090/api/v1/prometheus/XXXXXXXXXXXXXXXXX"
   */
  internetRemoteReadUrl?: string;
  /**
   * @remarks
   * The public URL for remote write.
   * 
   * @example
   * "http://cn-hangzhou.arms.aliyuncs.com:9090/api/v1/prometheus/XXXXXXXXXXXXXXXXX"
   */
  internetRemoteWriteUrl?: string;
  /**
   * @remarks
   * The internal URL for Pushgateway.
   * 
   * @example
   * "http://cn-hangzhou-intranet.arms.aliyuncs.com:9090/api/v1/prometheus/XXXXXXXXXXXXXXXXX"
   */
  pushGatewayUrl?: string;
  /**
   * @remarks
   * The internal URL for remote read.
   * 
   * @example
   * "http://cn-hangzhou-intranet.arms.aliyuncs.com:9090/api/v1/prometheus/XXXXXXXXXXXXXXXXX"
   */
  remoteReadUrl?: string;
  /**
   * @remarks
   * The internal URL for remote write.
   * 
   * @example
   * "http://cn-hangzhou-intranet.arms.aliyuncs.com:9090/api/v1/prometheus/XXXXXXXXXXXXXXXXX"
   */
  remoteWriteUrl?: string;
  /**
   * @remarks
   * The token value used for authentication.
   * 
   * @example
   * "eyJhbGciOiJIUzI1NiJ9.DKEIFJSL.KYK6uOtNVxTVHXJbH5MNqlsAuUtKzNlUvmAIiKc-QXw"
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'AuthToken',
      grafanaUrl: 'GrafanaUrl',
      internetGrafanaUrl: 'InternetGrafanaUrl',
      internetPushGatewayUrl: 'InternetPushGatewayUrl',
      internetRemoteReadUrl: 'InternetRemoteReadUrl',
      internetRemoteWriteUrl: 'InternetRemoteWriteUrl',
      pushGatewayUrl: 'PushGatewayUrl',
      remoteReadUrl: 'RemoteReadUrl',
      remoteWriteUrl: 'RemoteWriteUrl',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'boolean',
      grafanaUrl: 'string',
      internetGrafanaUrl: 'string',
      internetPushGatewayUrl: 'string',
      internetRemoteReadUrl: 'string',
      internetRemoteWriteUrl: 'string',
      pushGatewayUrl: 'string',
      remoteReadUrl: 'string',
      remoteWriteUrl: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudClusterAllUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The identifier of the cloud service.
   * 
   * @example
   * amp
   */
  productCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The URLs for remote read and write. The value is a JSON string.
   */
  remoteUrl?: GetCloudClusterAllUrlResponseBodyDataRemoteUrl;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      region: 'Region',
      remoteUrl: 'RemoteUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      region: 'string',
      remoteUrl: GetCloudClusterAllUrlResponseBodyDataRemoteUrl,
    };
  }

  validate() {
    if(this.remoteUrl && typeof (this.remoteUrl as any).validate === 'function') {
      (this.remoteUrl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudClusterAllUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful. Other status codes indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * An array object.
   */
  data?: GetCloudClusterAllUrlResponseBodyData[];
  /**
   * @remarks
   * The returned message.
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
   * 99A663CB-8D7B-4B0D-A006-03C8EE38E7BB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
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
      code: 'number',
      data: { 'type': 'array', 'itemType': GetCloudClusterAllUrlResponseBodyData },
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

