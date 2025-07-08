// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsSignListNewRequest extends $dara.Model {
  aggregatedRegisterStatus?: number;
  auditState?: string;
  bizType?: string;
  isGlobeSign?: number;
  operatorCodes?: string[];
  operatorRegisterStatus?: number;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  qualificationName?: string;
  registerResult?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serviceType?: string;
  signName?: string;
  signSource?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatedRegisterStatus: 'AggregatedRegisterStatus',
      auditState: 'AuditState',
      bizType: 'BizType',
      isGlobeSign: 'IsGlobeSign',
      operatorCodes: 'OperatorCodes',
      operatorRegisterStatus: 'OperatorRegisterStatus',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      qualificationName: 'QualificationName',
      registerResult: 'RegisterResult',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serviceType: 'ServiceType',
      signName: 'SignName',
      signSource: 'SignSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatedRegisterStatus: 'number',
      auditState: 'string',
      bizType: 'string',
      isGlobeSign: 'number',
      operatorCodes: { 'type': 'array', 'itemType': 'string' },
      operatorRegisterStatus: 'number',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      qualificationName: 'string',
      registerResult: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serviceType: 'string',
      signName: 'string',
      signSource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operatorCodes)) {
      $dara.Model.validateArray(this.operatorCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

