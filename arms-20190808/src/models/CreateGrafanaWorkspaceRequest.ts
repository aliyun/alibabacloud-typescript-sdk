// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGrafanaWorkspaceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGrafanaWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * Account quantity.  
   * 
   * **Value description:**  
   * - If GrafanaWorkspaceEdition is **standard**, this parameter is invalid.  
   * - If GrafanaWorkspaceEdition is **personal_edition**, this parameter is invalid. Default Value: 1.  
   * - If GrafanaWorkspaceEdition is **experts_edition**, valid values are 10, 30, or 50. Default Value: 10.  
   * - If GrafanaWorkspaceEdition is **advanced_edition**, this parameter is invalid. Default Value: 100.
   * 
   * @example
   * 10
   */
  accountNumber?: string;
  /**
   * @remarks
   * The language. Default value: zh. Valid values:
   * 
   * *   zh
   * *   en
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * Whether auto-renewal is enabled. Valid values:  
   * - true: Auto-renewal is enabled.  
   * - false: Auto-renewal is disabled.  
   * 
   * Default Value: true.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * Additional custom account quantity for the User.  
   * 
   * **Value description:**  
   * - If GrafanaWorkspaceEdition is **standard**, this parameter is invalid.  
   * - If GrafanaWorkspaceEdition is **personal_edition**, this parameter is invalid.  
   * - If GrafanaWorkspaceEdition is **experts_edition**, this parameter is invalid.  
   * - If GrafanaWorkspaceEdition is **advanced_edition**, the value range is 0 to 2000 and must be a multiple of 10. Default Value: 0.
   * 
   * @example
   * 0
   */
  customAccountNumber?: string;
  /**
   * @remarks
   * The description of the workspace
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Subscription duration of the instance. Valid values:  
   * 
   * - If PricingCycle is **Month**, indicating monthly billing, the value range is **1** to **9**.  
   * - If PricingCycle is **Year**, indicating yearly billing, the value range is **1** to **3**.  
   * 
   * Default Value: 1.
   * 
   * @example
   * 6
   */
  duration?: string;
  /**
   * @remarks
   * Grafana version.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.x
   */
  grafanaVersion?: string;
  /**
   * @remarks
   * The edition.
   * 
   * **Valid values:**
   * 
   * *   standard: `Beta Edition or Standard Edition`
   * *   personal_edition: Developer Edition
   * *   experts_edition: Pro Edition
   * *   advanced_edition: Advanced Edition
   * 
   * This parameter is required.
   * 
   * @example
   * experts_edition
   */
  grafanaWorkspaceEdition?: string;
  /**
   * @remarks
   * The name of the Grafana workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * testgrafana
   */
  grafanaWorkspaceName?: string;
  /**
   * @remarks
   * The password of the workspace. The password must be 8 to 30 characters in length. It must include at least three of the following characters types: uppercase letter, lowercase letter, digit, and special character. Special characters include () \\" ~ ! @ # $ % ^ & \\* - _ + =.
   * 
   * @example
   * Test123456!
   */
  password?: string;
  /**
   * @remarks
   * 包年包月的计费周期，取值： Month（默认值）：按月购买。                                 Year：按年购买。
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: CreateGrafanaWorkspaceRequestTags[];
  static names(): { [key: string]: string } {
    return {
      accountNumber: 'AccountNumber',
      aliyunLang: 'AliyunLang',
      autoRenew: 'AutoRenew',
      customAccountNumber: 'CustomAccountNumber',
      description: 'Description',
      duration: 'Duration',
      grafanaVersion: 'GrafanaVersion',
      grafanaWorkspaceEdition: 'GrafanaWorkspaceEdition',
      grafanaWorkspaceName: 'GrafanaWorkspaceName',
      password: 'Password',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNumber: 'string',
      aliyunLang: 'string',
      autoRenew: 'string',
      customAccountNumber: 'string',
      description: 'string',
      duration: 'string',
      grafanaVersion: 'string',
      grafanaWorkspaceEdition: 'string',
      grafanaWorkspaceName: 'string',
      password: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateGrafanaWorkspaceRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

