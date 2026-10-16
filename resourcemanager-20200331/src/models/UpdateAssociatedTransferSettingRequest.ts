// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAssociatedTransferSettingRequestRuleSettings extends $dara.Model {
  /**
   * @remarks
   * The resource type of the associated resource.
   * 
   * You can obtain the resource type from the **Resource Type** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * disk
   */
  associatedResourceType?: string;
  /**
   * @remarks
   * The cloud service code of the associated resource.
   * 
   * You can obtain the cloud service code from the **Cloud Service Code** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * ecs
   */
  associatedService?: string;
  /**
   * @remarks
   * The resource type of the master resource.
   * 
   * You can obtain the resource type from the **Resource Type** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * instance
   */
  masterResourceType?: string;
  /**
   * @remarks
   * The cloud service code of the master resource.
   * 
   * You can obtain the cloud service code from the **Cloud Service Code** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * ecs
   */
  masterService?: string;
  /**
   * @remarks
   * The enabling status of the associated resource group transfer feature. Valid values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * Enable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      associatedResourceType: 'AssociatedResourceType',
      associatedService: 'AssociatedService',
      masterResourceType: 'MasterResourceType',
      masterService: 'MasterService',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedResourceType: 'string',
      associatedService: 'string',
      masterResourceType: 'string',
      masterService: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAssociatedTransferSettingRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to start the task for transferring existing associated resources to the resource group. Valid values:
   * 
   * - false: Does not start the task for transferring existing associated resources to the resource group.
   * - true: Starts the task for transferring existing associated resources to the resource group.
   * 
   * @example
   * false
   */
  enableExistingResourcesTransfer?: string;
  /**
   * @remarks
   * The rule settings of the associated resource group transfer feature.
   */
  ruleSettings?: UpdateAssociatedTransferSettingRequestRuleSettings[];
  static names(): { [key: string]: string } {
    return {
      enableExistingResourcesTransfer: 'EnableExistingResourcesTransfer',
      ruleSettings: 'RuleSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableExistingResourcesTransfer: 'string',
      ruleSettings: { 'type': 'array', 'itemType': UpdateAssociatedTransferSettingRequestRuleSettings },
    };
  }

  validate() {
    if(Array.isArray(this.ruleSettings)) {
      $dara.Model.validateArray(this.ruleSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

