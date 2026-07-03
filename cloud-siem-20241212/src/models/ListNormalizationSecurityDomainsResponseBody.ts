// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNormalizationSecurityDomainsResponseBodyNormalizationSecurityDomains extends $dara.Model {
  /**
   * @remarks
   * The security domain ID.
   * 
   * @example
   * OTHER
   */
  normalizationSecurityDomainId?: string;
  /**
   * @remarks
   * The security domain name.
   * 
   * @example
   * net
   */
  normalizationSecurityDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      normalizationSecurityDomainId: 'NormalizationSecurityDomainId',
      normalizationSecurityDomainName: 'NormalizationSecurityDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalizationSecurityDomainId: 'string',
      normalizationSecurityDomainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNormalizationSecurityDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned in this query.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. Leave this parameter empty for the first query or if no more results exist. If more results exist, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of security domains.
   */
  normalizationSecurityDomains?: ListNormalizationSecurityDomainsResponseBodyNormalizationSecurityDomains[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      normalizationSecurityDomains: 'NormalizationSecurityDomains',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      normalizationSecurityDomains: { 'type': 'array', 'itemType': ListNormalizationSecurityDomainsResponseBodyNormalizationSecurityDomains },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.normalizationSecurityDomains)) {
      $dara.Model.validateArray(this.normalizationSecurityDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

