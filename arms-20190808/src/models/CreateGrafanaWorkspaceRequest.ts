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
   * @example
   * false
   */
  autoRenew?: string;
  /**
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
   * @example
   * 6
   */
  duration?: string;
  /**
   * @remarks
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

