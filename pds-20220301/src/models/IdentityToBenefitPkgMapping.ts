// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BenefitPkgDeliveryInfo } from "./BenefitPkgDeliveryInfo";


export class IdentityToBenefitPkgMapping extends $dara.Model {
  /**
   * @remarks
   * Calculation rules of equity in the benefit package.
   * 
   * The user identity benefit package. The return value is empty. Only the quota of the effective equity is calculated based on the priority.
   * 
   * The user resource benefit package, which can return null or non-null values. If the return value is not empty, this benefit package is used to append the quota of existing benefits in other benefit packages, which is limited to quota-type benefits. For example, if a user identity benefit package already contains 10 GB of user storage capacity, you can define one or more user resource benefit packages to add additional storage capacity for some users.
   * 
   * The following append calculation rules are supported:
   * 
   * sum: Multiple benefit packages have the same equity and are accumulated.
   * 
   * max: If multiple benefit packages have the same equity, the max value is used.
   * 
   * min: If multiple benefit packages have the same equity, the value of min is used.
   * 
   * @example
   * sum
   */
  benefitPkgComputationRule?: string;
  /**
   * @remarks
   * The ID of the benefit package.
   * 
   * @example
   * 40cb7794c9294
   */
  benefitPkgId?: string;
  /**
   * @remarks
   * The name of the benefit package.
   */
  benefitPkgName?: string;
  /**
   * @remarks
   * The ID of the owner of the benefit package.
   * 
   * @example
   * bj1
   */
  benefitPkgOwnerId?: string;
  /**
   * @remarks
   * Priority of the benefit package.
   * 
   * The priority returned for the user identity benefit package. A smaller number indicates a higher priority.
   * 
   * @example
   * 1
   */
  benefitPkgPriority?: number;
  /**
   * @remarks
   * The type of benefit package.
   * 
   * Valid values:
   * 
   * user_identity : user identity benefit package
   * 
   * user_resource: user resource benefit package
   * 
   * @example
   * user_identity
   */
  benefitPkgType?: string;
  /**
   * @remarks
   * Creation time of the entity and benefit package association.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The information about the benefit packages that are associated with an entity.
   */
  deliveryInfoList?: BenefitPkgDeliveryInfo[];
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * user123
   */
  identityId?: string;
  /**
   * @remarks
   * The type of the entity.
   * 
   * @example
   * user
   */
  identityType?: string;
  /**
   * @remarks
   * Update time associated with the entity and benefit package.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
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

