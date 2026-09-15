// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCheckItemRequestAssistInfo extends $dara.Model {
  /**
   * @remarks
   * The type of the help information for the check item risk. Valid values:
   * 
   * - **text**: Text.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The content of the help information for the check item risk.
   * 
   * @example
   * custom assistInfo.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class UpdateCheckItemRequestDescription extends $dara.Model {
  /**
   * @remarks
   * The type of the check item description. Valid values:
   * 
   * - **text**: Text.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The description of the check item.
   * 
   * @example
   * custom description.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class UpdateCheckItemRequestSolution extends $dara.Model {
  /**
   * @remarks
   * The type of the solution information for the check item. Valid values:
   * 
   * - **text**: Text.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The solution content for the check item risk.
   * 
   * @example
   * custom solution.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class UpdateCheckItemRequest extends $dara.Model {
  /**
   * @remarks
   * The help information for the check item.
   */
  assistInfo?: UpdateCheckItemRequestAssistInfo;
  /**
   * @remarks
   * The ID of the custom check item to update.
   * > You can call the [ListCheckItems](~~ListCheckItems~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000000001
   */
  checkId?: number;
  /**
   * @remarks
   * The definition rule of the custom check item.
   * 
   * @example
   * {"AssociatedData":{"ToDataList":[{"DataName":"ACS_ECS_Instance","PropertyPath":"InstanceId","FromPropertyPath":"InstanceId"}]},"MatchProperty":{"Operator":"AND","MatchProperties":[{"DataName":"ACS_ECS_Disk","PropertyPath":"InstanceId","MatchOperator":"EQ","MatchPropertyValue":"testId"},{"DataName":"ACS_ECS_Instance","PropertyPath":"InstanceId","MatchOperator":"EQ","MatchPropertyValue":"testInstanceId"}]}}
   */
  checkRule?: string;
  /**
   * @remarks
   * The name of the custom check item.
   * 
   * @example
   * testCheckItemName
   */
  checkShowName?: string;
  /**
   * @remarks
   * The description of the check item.
   */
  description?: UpdateCheckItemRequestDescription;
  /**
   * @remarks
   * The asset subtype of the cloud service.
   * > You can call the [ListCloudAssetSchemas](~~ListCloudAssetSchemas~~) operation to obtain this parameter.
   * 
   * @example
   * DISK
   */
  instanceSubType?: string;
  /**
   * @remarks
   * The asset type of the cloud service.
   * > You can call the [ListCloudAssetSchemas](~~ListCloudAssetSchemas~~) operation to obtain this parameter.
   * 
   * @example
   * ECS
   */
  instanceType?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * remark.
   */
  remark?: string;
  /**
   * @remarks
   * The risk level of the check item. Valid values:
   * - **HIGH**: High.
   * - **MEDIUM**: Medium.
   * - **LOW**: Low.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The IDs of the sections associated with the check item.
   */
  sectionIds?: number[];
  /**
   * @remarks
   * The solution information for the check item.
   */
  solution?: UpdateCheckItemRequestSolution;
  /**
   * @remarks
   * The status of the check item. Valid values:
   * - **EDIT**: Being edited.
   * - **RELEASE**: Published.
   * 
   * > - Changing the status from **Published** to **Being edited** purges all historical records.
   * > - Only check items in the **Published** status can be used for checks.
   * 
   * @example
   * RELEASE
   */
  status?: string;
  /**
   * @remarks
   * The cloud asset vendor.
   * > You can call the [ListCloudAssetSchemas](~~ListCloudAssetSchemas~~) operation to obtain the available vendors.
   * 
   * @example
   * ALIYUN
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      assistInfo: 'AssistInfo',
      checkId: 'CheckId',
      checkRule: 'CheckRule',
      checkShowName: 'CheckShowName',
      description: 'Description',
      instanceSubType: 'InstanceSubType',
      instanceType: 'InstanceType',
      remark: 'Remark',
      riskLevel: 'RiskLevel',
      sectionIds: 'SectionIds',
      solution: 'Solution',
      status: 'Status',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistInfo: UpdateCheckItemRequestAssistInfo,
      checkId: 'number',
      checkRule: 'string',
      checkShowName: 'string',
      description: UpdateCheckItemRequestDescription,
      instanceSubType: 'string',
      instanceType: 'string',
      remark: 'string',
      riskLevel: 'string',
      sectionIds: { 'type': 'array', 'itemType': 'number' },
      solution: UpdateCheckItemRequestSolution,
      status: 'string',
      vendor: 'string',
    };
  }

  validate() {
    if(this.assistInfo && typeof (this.assistInfo as any).validate === 'function') {
      (this.assistInfo as any).validate();
    }
    if(this.description && typeof (this.description as any).validate === 'function') {
      (this.description as any).validate();
    }
    if(Array.isArray(this.sectionIds)) {
      $dara.Model.validateArray(this.sectionIds);
    }
    if(this.solution && typeof (this.solution as any).validate === 'function') {
      (this.solution as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

