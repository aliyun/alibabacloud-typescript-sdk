// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BenefitPkgDeliveryInfo } from "./BenefitPkgDeliveryInfo";


export class IdentityToBenefitPkgMapping extends $dara.Model {
  benefitPkgComputationRule?: string;
  benefitPkgId?: string;
  benefitPkgName?: string;
  benefitPkgOwnerId?: string;
  benefitPkgPriority?: number;
  benefitPkgType?: string;
  createdAt?: string;
  deliveryInfoList?: BenefitPkgDeliveryInfo[];
  identityId?: string;
  identityType?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      benefitPkgComputationRule: 'benefit_pkg_computation_rule',
      benefitPkgId: 'benefit_pkg_id',
      benefitPkgName: 'benefit_pkg_name',
      benefitPkgOwnerId: 'benefit_pkg_owner_id',
      benefitPkgPriority: 'benefit_pkg_priority',
      benefitPkgType: 'benefit_pkg_type',
      createdAt: 'created_at',
      deliveryInfoList: 'delivery_info_list',
      identityId: 'identity_id',
      identityType: 'identity_type',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitPkgComputationRule: 'string',
      benefitPkgId: 'string',
      benefitPkgName: 'string',
      benefitPkgOwnerId: 'string',
      benefitPkgPriority: 'number',
      benefitPkgType: 'string',
      createdAt: 'string',
      deliveryInfoList: { 'type': 'array', 'itemType': BenefitPkgDeliveryInfo },
      identityId: 'string',
      identityType: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deliveryInfoList)) {
      $dara.Model.validateArray(this.deliveryInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

