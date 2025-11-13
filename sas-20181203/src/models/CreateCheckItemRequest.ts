// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCheckItemRequestAssistInfo extends $dara.Model {
  /**
   * @remarks
   * Type of the help information for the check item risk. Values:
   * 
   * - **text**: Text
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * Content of the help information for the check item risk.
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
   * Type of the check item description information. Values:
   * 
   * - **text**: Text
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * Specific content of the description.
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
   * Type of the solution information for the check item. Values:
   * 
   * - **text**: Text
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * Content of the solution for the check item risk.
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
   * Help information for the check item.
   */
  assistInfo?: CreateCheckItemRequestAssistInfo;
  /**
   * @remarks
   * Definition rule for the custom check item.
   * 
   * This parameter is required.
   * 
   * @example
   * {"AssociatedData":{"ToDataList":[{"DataName":"ACS_ECS_Instance","PropertyPath":"InstanceId","FromPropertyPath":"InstanceId"}]},"MatchProperty":{"Operator":"AND","MatchProperties":[{"DataName":"ACS_ECS_Disk","PropertyPath":"InstanceId","MatchOperator":"EQ","MatchPropertyValue":"testId"},{"DataName":"ACS_ECS_Instance","PropertyPath":"InstanceId","MatchOperator":"EQ","MatchPropertyValue":"testInstanceId"}]}}
   */
  checkRule?: string;
  /**
   * @remarks
   * Name of the custom check item.
   * 
   * This parameter is required.
   * 
   * @example
   * testCheckItemName
   */
  checkShowName?: string;
  /**
   * @remarks
   * Description information of the check item.
   */
  description?: CreateCheckItemRequestDescription;
  /**
   * @remarks
   * Sub-asset type of the cloud product.
   * > You can call the [ListCloudAssetSchemas](~~ListCloudAssetSchemas~~) API to get this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * DISK
   */
  instanceSubType?: string;
  /**
   * @remarks
   * Asset type of the cloud product.
   * > You can call the [ListCloudAssetSchemas](~~ListCloudAssetSchemas~~) API to get this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  instanceType?: string;
  /**
   * @remarks
   * Remark information.
   * 
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * Risk level of the check item. Values:
   * - **HIGH**: High risk
   * - **MEDIUM**: Medium risk
   * - **LOW**: Low risk
   * 
   * This parameter is required.
   * 
   * @example
   * LOW
   */
  riskLevel?: string;
  /**
   * @remarks
   * Array of section IDs associated with the check item.
   * 
   * This parameter is required.
   */
  sectionIds?: number[];
  /**
   * @remarks
   * Solution information for the check item.
   */
  solution?: CreateCheckItemRequestSolution;
  /**
   * @remarks
   * Status of the check item. Values:
   * - **EDIT**: In editing
   * - **RELEASE**: Released
   * 
   * > - Changing from **Released** to **In editing** will clear all historical records
   * > - Only the **Released** status allows the use of the check item for inspection.
   * 
   * This parameter is required.
   * 
   * @example
   * EDIT
   */
  status?: string;
  /**
   * @remarks
   * Cloud asset vendor.
   * > You can call the [ListCloudAssetSchemas](~~ListCloudAssetSchemas~~) API to get the available vendors.
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

