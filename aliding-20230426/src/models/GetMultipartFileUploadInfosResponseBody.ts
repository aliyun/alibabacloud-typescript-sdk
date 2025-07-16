// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultipartFileUploadInfosResponseBodyMultipartHeaderSignatureInfosHeaderSignatureInfo extends $dara.Model {
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

export class GetMultipartFileUploadInfosResponseBodyMultipartHeaderSignatureInfos extends $dara.Model {
  headerSignatureInfo?: GetMultipartFileUploadInfosResponseBodyMultipartHeaderSignatureInfosHeaderSignatureInfo;
  /**
   * @example
   * 1
   */
  partNumber?: number;
  static names(): { [key: string]: string } {
    return {
      headerSignatureInfo: 'HeaderSignatureInfo',
      partNumber: 'PartNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerSignatureInfo: GetMultipartFileUploadInfosResponseBodyMultipartHeaderSignatureInfosHeaderSignatureInfo,
      partNumber: 'number',
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

export class GetMultipartFileUploadInfosResponseBody extends $dara.Model {
  multipartHeaderSignatureInfos?: GetMultipartFileUploadInfosResponseBodyMultipartHeaderSignatureInfos[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
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
      multipartHeaderSignatureInfos: 'multipartHeaderSignatureInfos',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multipartHeaderSignatureInfos: { 'type': 'array', 'itemType': GetMultipartFileUploadInfosResponseBodyMultipartHeaderSignatureInfos },
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multipartHeaderSignatureInfos)) {
      $dara.Model.validateArray(this.multipartHeaderSignatureInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

