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

