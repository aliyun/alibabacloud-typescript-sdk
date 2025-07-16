// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileUploadInfoResponseBodyHeaderSignatureInfo extends $dara.Model {
  /**
   * @example
   * 900
   */
  expirationSeconds?: number;
  headers?: { [key: string]: string };
  internalResourceUrls?: string[];
  /**
   * @example
   * ZHANGJIAKOU
   */
  region?: string;
  resourceUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      expirationSeconds: 'ExpirationSeconds',
      headers: 'Headers',
      internalResourceUrls: 'InternalResourceUrls',
      region: 'Region',
      resourceUrls: 'ResourceUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationSeconds: 'number',
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      internalResourceUrls: { 'type': 'array', 'itemType': 'string' },
      region: 'string',
      resourceUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.internalResourceUrls)) {
      $dara.Model.validateArray(this.internalResourceUrls);
    }
    if(Array.isArray(this.resourceUrls)) {
      $dara.Model.validateArray(this.resourceUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileUploadInfoResponseBody extends $dara.Model {
  headerSignatureInfo?: GetFileUploadInfoResponseBodyHeaderSignatureInfo;
  /**
   * @example
   * HEADER_SIGNATURE
   */
  protocol?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * DINGTALK
   */
  storageDriver?: string;
  /**
   * @example
   * upload_key
   */
  uploadKey?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      headerSignatureInfo: 'headerSignatureInfo',
      protocol: 'protocol',
      requestId: 'requestId',
      storageDriver: 'storageDriver',
      uploadKey: 'uploadKey',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerSignatureInfo: GetFileUploadInfoResponseBodyHeaderSignatureInfo,
      protocol: 'string',
      requestId: 'string',
      storageDriver: 'string',
      uploadKey: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.headerSignatureInfo && typeof (this.headerSignatureInfo as any).validate === 'function') {
      (this.headerSignatureInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

