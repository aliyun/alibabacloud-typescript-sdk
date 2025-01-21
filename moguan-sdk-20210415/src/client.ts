// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class RegisterDeviceResponseBodyData extends $dara.Model {
  /**
   * @example
   * rSDUqJEawcrhaHVDXgQQ2vV3eOQDzuos5TAJgx9uolqVaAKkgcBHfWd/jYknsiVeYxsLWyscP0U6ia0XL/u6t7ira9XnI3Jv9qHzosrAW09YrT68VigxqwrutxtexXGgrXFzYmcMMe05rYhEmyyoeNu0CB40HxggXIIw10vH0pvhMLd0ssz6FbaOGhZ/7WDzFAqeXlz7+whZFNlXwaCfIwHTDIj9nBHHsBzWWocOHO==
   */
  license?: string;
  /**
   * @example
   * SSTfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCwdTbYqDHxAlmdSFowPthsG3wKyXdembceyc5j31FZIYGESE4x6ND0al5ejdx26d2ZMRDzlkjnLqUN3snezRA1x0qs92taGXMrIvYDi0dEsz3X/a/VXHPxNu0+/PBT9RYzakLDV9F/6QdYn4PQUvHSTfz2ghaS5SCj++VVDe4CBBIDAAPB
   */
  publicKey?: string;
  /**
   * @example
   * 1082f5e57a004a0799198d4a370c3efa
   */
  rid?: string;
  /**
   * @example
   * VnxhWhjL2D3kkGcv8Q/wHzyD6dTEYIDfnIgzDWLS7iQRiCWLu1K+EA+Q6iiH1lpaDNGeQ65zVpbB1wtGMmJymQMJeJ5RHzEo74wwXP48Yfn6tdAoZwtLkxXqZo5N99W/JyEyHyeisC44ZIpLcs1YPv3Wr+uRirUgjHhZXorxJ1E=
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      license: 'License',
      publicKey: 'PublicKey',
      rid: 'Rid',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      license: 'string',
      publicKey: 'string',
      rid: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NWTtS623eqo6s070
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 99daf4a623f2b623ae08e79d6d4bf686
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {}
   */
  extend?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SDKCodeTest01
   */
  sdkCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * D001
   */
  userDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      deviceId: 'DeviceId',
      extend: 'Extend',
      sdkCode: 'SdkCode',
      userDeviceId: 'UserDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      deviceId: 'string',
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sdkCode: 'string',
      userDeviceId: 'string',
    };
  }

  validate() {
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NWTtS623eqo6s070
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 99daf4a623f2b623ae08e79d6d4bf686
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {}
   */
  extendShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SDKCodeTest01
   */
  sdkCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * D001
   */
  userDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      deviceId: 'DeviceId',
      extendShrink: 'Extend',
      sdkCode: 'SdkCode',
      userDeviceId: 'UserDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      deviceId: 'string',
      extendShrink: 'string',
      sdkCode: 'string',
      userDeviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponseBody extends $dara.Model {
  data?: RegisterDeviceResponseBodyData;
  /**
   * @example
   * 0
   */
  errorCode?: number;
  errorMessage?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * A68E0F1E-9CEE-4BB9-8880-943730FFD9A9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RegisterDeviceResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
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

export class RegisterDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterDeviceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("moguan-sdk", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 注册设备
   * 
   * @param tmpReq - RegisterDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterDeviceResponse
   */
  async registerDeviceWithOptions(tmpReq: RegisterDeviceRequest, runtime: $dara.RuntimeOptions): Promise<RegisterDeviceResponse> {
    tmpReq.validate();
    let request = new RegisterDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extend)) {
      request.extendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extend, "Extend", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.extendShrink)) {
      body["Extend"] = request.extendShrink;
    }

    if (!$dara.isNull(request.sdkCode)) {
      body["SdkCode"] = request.sdkCode;
    }

    if (!$dara.isNull(request.userDeviceId)) {
      body["UserDeviceId"] = request.userDeviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterDevice",
      version: "2021-04-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RegisterDeviceResponse>(await this.callApi(params, req, runtime), new RegisterDeviceResponse({}));
    } else {
      return $dara.cast<RegisterDeviceResponse>(await this.execute(params, req, runtime), new RegisterDeviceResponse({}));
    }

  }

  /**
   * 注册设备
   * 
   * @param request - RegisterDeviceRequest
   * @returns RegisterDeviceResponse
   */
  async registerDevice(request: RegisterDeviceRequest): Promise<RegisterDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerDeviceWithOptions(request, runtime);
  }

}
