// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPurchasedDomainsRequest extends $dara.Model {
  currentPage?: number;
  domainName?: string;
  endOperationTime?: string;
  opTimeOrder?: boolean;
  operationStatus?: number;
  pageSize?: number;
  productType?: number;
  startOperationTime?: string;
  updateTimeOrder?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      domainName: 'DomainName',
      endOperationTime: 'EndOperationTime',
      opTimeOrder: 'OpTimeOrder',
      operationStatus: 'OperationStatus',
      pageSize: 'PageSize',
      productType: 'ProductType',
      startOperationTime: 'StartOperationTime',
      updateTimeOrder: 'UpdateTimeOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      domainName: 'string',
      endOperationTime: 'string',
      opTimeOrder: 'boolean',
      operationStatus: 'number',
      pageSize: 'number',
      productType: 'number',
      startOperationTime: 'string',
      updateTimeOrder: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

