// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomDomainResp } from "./CustomDomainResp";


export class ListCustomDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value is 200 if the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The custom domain names.
   * 
   * @example
   * []
   */
  customDomains?: CustomDomainResp[];
  /**
   * @remarks
   * Indicates whether a next page is available.
   * 
   * @example
   * False
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The maximum number of records to return per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
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
   * The offset for the next page.
   * 
   * @example
   * 100
   */
  nextOffset?: number;
  /**
   * @remarks
   * The pagination token for the next page. This parameter is empty if no more results are available.
   * 
   * @example
   * cae5f900-8b1d-4c0e-9c2a-1a2b3c4d5e6f
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BCFAE0A-9FA9-5F72-8E8B-724632BC19A9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 65
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      customDomains: 'customDomains',
      hasMore: 'hasMore',
      maxResults: 'maxResults',
      message: 'message',
      nextOffset: 'nextOffset',
      nextToken: 'nextToken',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      customDomains: { 'type': 'array', 'itemType': CustomDomainResp },
      hasMore: 'boolean',
      maxResults: 'number',
      message: 'string',
      nextOffset: 'number',
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customDomains)) {
      $dara.Model.validateArray(this.customDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

