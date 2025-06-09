// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCollectionPolicyResponseBodyCollectionPolicyCentralizeConfig } from "./GetCollectionPolicyResponseBodyCollectionPolicyCentralizeConfig";
import { GetCollectionPolicyResponseBodyCollectionPolicyDataConfig } from "./GetCollectionPolicyResponseBodyCollectionPolicyDataConfig";
import { GetCollectionPolicyResponseBodyCollectionPolicyPolicyConfig } from "./GetCollectionPolicyResponseBodyCollectionPolicyPolicyConfig";
import { GetCollectionPolicyResponseBodyCollectionPolicyResourceDirectory } from "./GetCollectionPolicyResponseBodyCollectionPolicyResourceDirectory";


export class GetCollectionPolicyResponseBodyCollectionPolicy extends $dara.Model {
  centralizeConfig?: GetCollectionPolicyResponseBodyCollectionPolicyCentralizeConfig;
  /**
   * @example
   * false
   */
  centralizeEnabled?: boolean;
  /**
   * @example
   * access_log
   */
  dataCode?: string;
  dataConfig?: GetCollectionPolicyResponseBodyCollectionPolicyDataConfig;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * false
   */
  internalPolicy?: boolean;
  policyConfig?: GetCollectionPolicyResponseBodyCollectionPolicyPolicyConfig;
  /**
   * @example
   * your_log_policy
   */
  policyName?: string;
  /**
   * @example
   * 148***********50
   */
  policyUid?: string;
  /**
   * @example
   * oss
   */
  productCode?: string;
  resourceDirectory?: GetCollectionPolicyResponseBodyCollectionPolicyResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      centralizeConfig: 'centralizeConfig',
      centralizeEnabled: 'centralizeEnabled',
      dataCode: 'dataCode',
      dataConfig: 'dataConfig',
      enabled: 'enabled',
      internalPolicy: 'internalPolicy',
      policyConfig: 'policyConfig',
      policyName: 'policyName',
      policyUid: 'policyUid',
      productCode: 'productCode',
      resourceDirectory: 'resourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centralizeConfig: GetCollectionPolicyResponseBodyCollectionPolicyCentralizeConfig,
      centralizeEnabled: 'boolean',
      dataCode: 'string',
      dataConfig: GetCollectionPolicyResponseBodyCollectionPolicyDataConfig,
      enabled: 'boolean',
      internalPolicy: 'boolean',
      policyConfig: GetCollectionPolicyResponseBodyCollectionPolicyPolicyConfig,
      policyName: 'string',
      policyUid: 'string',
      productCode: 'string',
      resourceDirectory: GetCollectionPolicyResponseBodyCollectionPolicyResourceDirectory,
    };
  }

  validate() {
    if(this.centralizeConfig && typeof (this.centralizeConfig as any).validate === 'function') {
      (this.centralizeConfig as any).validate();
    }
    if(this.dataConfig && typeof (this.dataConfig as any).validate === 'function') {
      (this.dataConfig as any).validate();
    }
    if(this.policyConfig && typeof (this.policyConfig as any).validate === 'function') {
      (this.policyConfig as any).validate();
    }
    if(this.resourceDirectory && typeof (this.resourceDirectory as any).validate === 'function') {
      (this.resourceDirectory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

