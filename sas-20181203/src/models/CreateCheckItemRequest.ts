// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCheckItemRequestAssistInfo extends $dara.Model {
  /**
   * @remarks
   * The type of the help information for the check item risk. Valid values:
   * 
   * - **text**: text
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

export class CreateCheckItemRequestDescription extends $dara.Model {
  /**
   * @remarks
   * The type of the check item description. Valid values:
   * 
   * - **text**: text
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The content of the description.
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

export class CreateCheckItemRequestSolution extends $dara.Model {
  /**
   * @remarks
   * The type of the check item solution information. Valid values:
   * 
   * - **text**: text
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The content of the solution for the check item risk.
   * 
   * @example
   * text
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

export class CreateCheckItemRequest extends $dara.Model {
  /**
   * @remarks
   * The help information of the check item.
   */
  assistInfo?: CreateCheckItemRequestAssistInfo;
  /**
   * @remarks
   * The rule definition of the custom check item.
   * 
   * This parameter is required.
   * 
   * @example
   * {"AssociatedData":{"ToDataList":[{"DataName":"ACS_ECS_Instance","PropertyPath":"InstanceId","FromPropertyPath":"InstanceId"}]},"MatchProperty":{"Operator":"AND","MatchProperties":[{"DataName":"ACS_ECS_Disk","PropertyPath":"InstanceId","MatchOperator":"EQ","MatchPropertyValue":"testId"},{"DataName":"ACS_ECS_Instance","PropertyPath":"InstanceId","MatchOperator":"EQ","MatchPropertyValue":"testInstanceId"}]}}
   */
  checkRule?: string;
  /**
   * @remarks
   * The name of the custom check item.
   * 
   * This parameter is required.
   * 
   * @example
   * testCheckItemName
   */
  checkShowName?: string;
  /**
   * @remarks
   * The description of the check item.
   */
  description?: CreateCheckItemRequestDescription;
  /**
   * @remarks
   * The asset subtype of the cloud service.
   * > You can call the [ListCloudAssetSchemas](~~ListCloudAssetSchemas~~) operation to obtain this parameter.
   * 
   * This parameter is required.
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
   * This parameter is required.
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
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * The risk level of the check item. Valid values:
   * - **HIGH**: High risk.
   * - **MEDIUM**: Medium risk.
   * - **LOW**: Low risk.
   * 
   * This parameter is required.
   * 
   * @example
   * LOW
   */
  riskLevel?: string;
  /**
   * @remarks
   * The IDs of the sections associated with the check item.
   * 
   * This parameter is required.
   */
  sectionIds?: number[];
  /**
   * @remarks
   * The solution information of the check item.
   */
  solution?: CreateCheckItemRequestSolution;
  /**
   * @remarks
   * The status of the check item. Valid values:
   * - **EDIT**: Being edited.
   * - **RELEASE**: Published.
   * 
   * > - Changing the status from **Published** to **Being edited** will purge all historical records.
   * > - Only check items in the **Published** status can be used for checks.
   * 
   * This parameter is required.
   * 
   * @example
   * EDIT
   */
  status?: string;
  /**
   * @remarks
   * The cloud asset vendor.
   * > You can call the [ListCloudAssetSchemas](~~ListCloudAssetSchemas~~) operation to obtain the available vendors.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      assistInfo: 'AssistInfo',
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
      assistInfo: CreateCheckItemRequestAssistInfo,
      checkRule: 'string',
      checkShowName: 'string',
      description: CreateCheckItemRequestDescription,
      instanceSubType: 'string',
      instanceType: 'string',
      remark: 'string',
      riskLevel: 'string',
      sectionIds: { 'type': 'array', 'itemType': 'number' },
      solution: CreateCheckItemRequestSolution,
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

