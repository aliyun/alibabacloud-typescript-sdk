// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCheckItemRequestAssistInfo extends $dara.Model {
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

export class UpdateCheckItemRequestDescription extends $dara.Model {
  /**
   * @remarks
   * Type of the check item description. Values:
   * 
   * - **text**: Text
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * Description of the check item.
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
   * Help information for the check item.
   */
  assistInfo?: UpdateCheckItemRequestAssistInfo;
  /**
   * @remarks
   * ID of the custom check item to be updated.
   * > You can call the [ListCheckItems](~~ListCheckItems~~) API to get this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000000001
   */
  checkId?: number;
  /**
   * @remarks
   * Definition rule for the custom check item.
   * 
   * @example
   * {"AssociatedData":{"ToDataList":[{"DataName":"ACS_ECS_Instance","PropertyPath":"InstanceId","FromPropertyPath":"InstanceId"}]},"MatchProperty":{"Operator":"AND","MatchProperties":[{"DataName":"ACS_ECS_Disk","PropertyPath":"InstanceId","MatchOperator":"EQ","MatchPropertyValue":"testId"},{"DataName":"ACS_ECS_Instance","PropertyPath":"InstanceId","MatchOperator":"EQ","MatchPropertyValue":"testInstanceId"}]}}
   */
  checkRule?: string;
  /**
   * @remarks
   * Name of the custom check item.
   * 
   * @example
   * testCheckItemName
   */
  checkShowName?: string;
  /**
   * @remarks
   * Description of the check item.
   */
  description?: UpdateCheckItemRequestDescription;
  /**
   * @remarks
   * Sub-asset type of the cloud product.
   * > You can call the [ListCloudAssetSchemas](~~ListCloudAssetSchemas~~) API to get this parameter.
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
   * @example
   * ECS
   */
  instanceType?: string;
  /**
   * @remarks
   * Remark information
   * 
   * @example
   * remark.
   */
  remark?: string;
  /**
   * @remarks
   * Risk level of the check item. Values:
   * - **HIGH**: High risk
   * - **MEDIUM**: Medium risk
   * - **LOW**: Low risk
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * Array of section IDs associated with the check item.
   */
  sectionIds?: number[];
  /**
   * @remarks
   * Solution information for the check item.
   */
  solution?: UpdateCheckItemRequestSolution;
  /**
   * @remarks
   * Status of the check item. Values:
   * - **EDIT**: In editing
   * - **RELEASE**: Released
   * 
   * > - Changing from **Released** to **In editing** will clear all historical records
   * > - Only the **Released** status allows the use of the check item for inspection.
   * 
   * @example
   * RELEASE
   */
  status?: string;
  /**
   * @remarks
   * Cloud asset vendor.
   * > You can call the [ListCloudAssetSchemas](~~ListCloudAssetSchemas~~) API to get the available vendors.
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

