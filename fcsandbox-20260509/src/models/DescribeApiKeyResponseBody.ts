// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApiKey } from "./ApiKey";
import { IPConfig } from "./Ipconfig";


export class DescribeApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Bailian API key.
   * 
   * @example
   * asdfjoY87-9IUHH
   */
  apiKey?: ApiKey;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  ipBlacklist?: IPConfig[];
  ipWhitelist?: IPConfig[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BCFAE0A-9FA9-5F72-8E8B-724632BC19A9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      code: 'code',
      ipBlacklist: 'ipBlacklist',
      ipWhitelist: 'ipWhitelist',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: ApiKey,
      code: 'string',
      ipBlacklist: { 'type': 'array', 'itemType': IPConfig },
      ipWhitelist: { 'type': 'array', 'itemType': IPConfig },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.apiKey && typeof (this.apiKey as any).validate === 'function') {
      (this.apiKey as any).validate();
    }
    if(Array.isArray(this.ipBlacklist)) {
      $dara.Model.validateArray(this.ipBlacklist);
    }
    if(Array.isArray(this.ipWhitelist)) {
      $dara.Model.validateArray(this.ipWhitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

