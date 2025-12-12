// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssociatedTransferSettingResponseBodyAssociatedTransferSettingRuleSettings extends $dara.Model {
  /**
   * @remarks
   * The type of the associated resource.
   * 
   * @example
   * disk
   */
  associatedResourceType?: string;
  /**
   * @remarks
   * The service code of the associated resource.
   * 
   * @example
   * ecs
   */
  associatedService?: string;
  /**
   * @remarks
   * The type of the primary resource.
   * 
   * @example
   * instance
   */
  masterResourceType?: string;
  /**
   * @remarks
   * The service code of the primary resource.
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

export class ListAssociatedTransferSettingResponseBodyAssociatedTransferSetting extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 121998723923****
   */
  accountId?: string;
  /**
   * @remarks
   * Indicates whether the Transfer Existing Associated Resources feature is enabled. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * true
   */
  enableExistingResourcesTransfer?: string;
  /**
   * @remarks
   * The settings of transfer rules.
   */
  ruleSettings?: ListAssociatedTransferSettingResponseBodyAssociatedTransferSettingRuleSettings[];
  /**
   * @remarks
   * The status of the Transfer Associated Resources feature. Valid values:
   * 
   * *   Enable: enabled
   * *   Disable: disabled
   * 
   * @example
   * Enable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      enableExistingResourcesTransfer: 'EnableExistingResourcesTransfer',
      ruleSettings: 'RuleSettings',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      enableExistingResourcesTransfer: 'string',
      ruleSettings: { 'type': 'array', 'itemType': ListAssociatedTransferSettingResponseBodyAssociatedTransferSettingRuleSettings },
      status: 'string',
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

export class ListAssociatedTransferSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The settings of the Transfer Associated Resources feature.
   */
  associatedTransferSetting?: ListAssociatedTransferSettingResponseBodyAssociatedTransferSetting;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7556FD65-45D2-5C45-9FC9-A7DE831C775C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      associatedTransferSetting: 'AssociatedTransferSetting',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedTransferSetting: ListAssociatedTransferSettingResponseBodyAssociatedTransferSetting,
      requestId: 'string',
    };
  }

  validate() {
    if(this.associatedTransferSetting && typeof (this.associatedTransferSetting as any).validate === 'function') {
      (this.associatedTransferSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

