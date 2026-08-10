// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApiKey } from "./ApiKey";
import { IPConfig } from "./Ipconfig";


export class CreateApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * API Key。
   * 
   * @example
   * {\\"gmtCreate\\": 1776997128000, \\"workspaceId\\": \\"ws-3w77kird5sblwwfk\\", \\"apiKeyId\\": 4808780, \\"createdBy\\": \\"AssumedRoleUser300873166069492100\\", \\"apiKeyValue\\": \\"sk-110ff0028ad64a24b9453c8955c4c191\\"}
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
   * Id of the request
   * 
   * @example
   * 7ADFF8D8-D4BA-5F79-AD49-DDABFEA59B6C
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

