// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPurchasedDomainsResponseBodyData extends $dara.Model {
  deliveryTime?: string;
  domainName?: string;
  operationStatus?: string;
  operationTime?: string;
  productType?: string;
  tradeMoney?: number;
  static names(): { [key: string]: string } {
    return {
      deliveryTime: 'DeliveryTime',
      domainName: 'DomainName',
      operationStatus: 'OperationStatus',
      operationTime: 'OperationTime',
      productType: 'ProductType',
      tradeMoney: 'TradeMoney',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryTime: 'string',
      domainName: 'string',
      operationStatus: 'string',
      operationTime: 'string',
      productType: 'string',
      tradeMoney: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

