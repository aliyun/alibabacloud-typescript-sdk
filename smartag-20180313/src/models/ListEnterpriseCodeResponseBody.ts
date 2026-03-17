// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterpriseCodeResponseBodyEnterpriseCodes extends $dara.Model {
  /**
   * @remarks
   * The enterprise code.
   * 
   * @example
   * 12P**
   */
  enterpriseCode?: string;
  /**
   * @remarks
   * Indicates whether the enterprise code is the default one.
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      enterpriseCode: 'EnterpriseCode',
      isDefault: 'IsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseCode: 'string',
      isDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about enterprise codes.
   */
  enterpriseCodes?: ListEnterpriseCodeResponseBodyEnterpriseCodes[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 2
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for returning the next page when the data is returned in more than one page.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1A57EF84-D587-4CF9-B0C8-307488BF52C9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      enterpriseCodes: 'EnterpriseCodes',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseCodes: { 'type': 'array', 'itemType': ListEnterpriseCodeResponseBodyEnterpriseCodes },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.enterpriseCodes)) {
      $dara.Model.validateArray(this.enterpriseCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

