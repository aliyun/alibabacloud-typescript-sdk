// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePurchasedApiGroupResponseBodyDomainsDomainItem extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * test_domain.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupResponseBodyDomains extends $dara.Model {
  domainItem?: DescribePurchasedApiGroupResponseBodyDomainsDomainItem[];
  static names(): { [key: string]: string } {
    return {
      domainItem: 'DomainItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainItem: { 'type': 'array', 'itemType': DescribePurchasedApiGroupResponseBodyDomainsDomainItem },
    };
  }

  validate() {
    if(Array.isArray(this.domainItem)) {
      $dara.Model.validateArray(this.domainItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the API group.
   * 
   * @example
   * api group description
   */
  description?: string;
  /**
   * @remarks
   * The list of domain names.
   */
  domains?: DescribePurchasedApiGroupResponseBodyDomains;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 48977d7b96074966a7c9c2a8872d7e06
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group.
   * 
   * @example
   * Weather
   */
  groupName?: string;
  /**
   * @remarks
   * The time when the API group was purchased.
   * 
   * @example
   * 2021-12-19T00:00:00
   */
  purchasedTime?: string;
  /**
   * @remarks
   * The region where the API group is located.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 61A16D46-EC04-5288-8A18-811B0F536CC2
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the API group.
   * 
   * *   **NORMAL**: The API group is normal.
   * *   **DELETE**: The API group is deleted.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      domains: 'Domains',
      groupId: 'GroupId',
      groupName: 'GroupName',
      purchasedTime: 'PurchasedTime',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domains: DescribePurchasedApiGroupResponseBodyDomains,
      groupId: 'string',
      groupName: 'string',
      purchasedTime: 'string',
      regionId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.domains && typeof (this.domains as any).validate === 'function') {
      (this.domains as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

