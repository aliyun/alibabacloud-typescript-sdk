// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpsertCollectionPolicyRequestCentralizeConfig } from "./UpsertCollectionPolicyRequestCentralizeConfig";
import { UpsertCollectionPolicyRequestDataConfig } from "./UpsertCollectionPolicyRequestDataConfig";
import { UpsertCollectionPolicyRequestPolicyConfig } from "./UpsertCollectionPolicyRequestPolicyConfig";
import { UpsertCollectionPolicyRequestResourceDirectory } from "./UpsertCollectionPolicyRequestResourceDirectory";


export class UpsertCollectionPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of centralized storage.
   */
  centralizeConfig?: UpsertCollectionPolicyRequestCentralizeConfig;
  /**
   * @remarks
   * Specifies whether to enable centralized storage. Default value: false.
   * 
   * @example
   * false
   */
  centralizeEnabled?: boolean;
  /**
   * @remarks
   * The code of the log type.
   * 
   * This parameter is required.
   * 
   * @example
   * access_log
   */
  dataCode?: string;
  /**
   * @remarks
   * The data configurations. The configuration is returned only for global logs. For example, if productCode is set to sls, the configuration is returned.
   */
  dataConfig?: UpsertCollectionPolicyRequestDataConfig;
  /**
   * @remarks
   * Specifies whether to enable the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The configurations of the policy.
   * 
   * This parameter is required.
   */
  policyConfig?: UpsertCollectionPolicyRequestPolicyConfig;
  /**
   * @remarks
   * The name must meet the following requirements:
   * 
   * *   The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * *   The name must start with a letter.
   * *   The name must be 3 to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * your_log_policy
   */
  policyName?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
  productCode?: string;
  /**
   * @remarks
   * The configurations of the resource directory. The account must have activated the resource directory and be a management account or a delegated administrator of the resource directory.
   */
  resourceDirectory?: UpsertCollectionPolicyRequestResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      centralizeConfig: 'centralizeConfig',
      centralizeEnabled: 'centralizeEnabled',
      dataCode: 'dataCode',
      dataConfig: 'dataConfig',
      enabled: 'enabled',
      policyConfig: 'policyConfig',
      policyName: 'policyName',
      productCode: 'productCode',
      resourceDirectory: 'resourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centralizeConfig: UpsertCollectionPolicyRequestCentralizeConfig,
      centralizeEnabled: 'boolean',
      dataCode: 'string',
      dataConfig: UpsertCollectionPolicyRequestDataConfig,
      enabled: 'boolean',
      policyConfig: UpsertCollectionPolicyRequestPolicyConfig,
      policyName: 'string',
      productCode: 'string',
      resourceDirectory: UpsertCollectionPolicyRequestResourceDirectory,
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

