// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigResourceGroupModelTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The model group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * The WUYING resource group ID, which starts with rg-. This resource group is managed by the WUYING Enterprise Edition control service, and automatic creation by the system occurs after the deployment of agent runtimes such as JVS Computer, OpenClaw, and Hermes Agent. You can obtain it from the ResourceGroup[].ResourceGroupId field in the response of the DescribeResourceGroups operation of WUYING Cloud Desktop eds-user (API version 2021-03-08), or from the Data.ResourceGroupId field in the response of the GetRuntimeModelConfig operation of this service.
   * 
   * > Other IDs such as the account-level resource group ID in Alibaba Cloud Resource Manager and node pool IDs cannot be passed as this parameter. Only WUYING resource group IDs are valid.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      modelTemplateId: 'ModelTemplateId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelTemplateId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

