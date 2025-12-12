// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAssociatedTransferSettingRequestRuleSettings extends $dara.Model {
  /**
   * @remarks
   * The type of the associated resource.
   * 
   * You can obtain the resource type from the **Resource type** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * disk
   */
  associatedResourceType?: string;
  /**
   * @remarks
   * The service code of the associated resource.
   * 
   * You can obtain the service code from the **Service code** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * ecs
   */
  associatedService?: string;
  /**
   * @remarks
   * The type of the primary resource.
   * 
   * You can obtain the resource type from the **Resource type** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * instance
   */
  masterResourceType?: string;
  /**
   * @remarks
   * The service code of the primary resource.
   * 
   * You can obtain the service code from the **Service code** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * ecs
   */
  masterService?: string;
  /**
   * @remarks
   * The status of the Transfer Associated Resources feature. Valid values:
   * 
   * *   Enable: enabled
   * *   Disable: disabled
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
   * Specifies whether to enable the Transfer Existing Associated Resources feature. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  enableExistingResourcesTransfer?: string;
  /**
   * @remarks
   * The settings of transfer rules.
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

