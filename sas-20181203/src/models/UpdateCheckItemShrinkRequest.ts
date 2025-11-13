// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCheckItemShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Help information for the check item.
   */
  assistInfoShrink?: string;
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
  descriptionShrink?: string;
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
  solutionShrink?: string;
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
      assistInfoShrink: 'AssistInfo',
      checkId: 'CheckId',
      checkRule: 'CheckRule',
      checkShowName: 'CheckShowName',
      descriptionShrink: 'Description',
      instanceSubType: 'InstanceSubType',
      instanceType: 'InstanceType',
      remark: 'Remark',
      riskLevel: 'RiskLevel',
      sectionIds: 'SectionIds',
      solutionShrink: 'Solution',
      status: 'Status',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistInfoShrink: 'string',
      checkId: 'number',
      checkRule: 'string',
      checkShowName: 'string',
      descriptionShrink: 'string',
      instanceSubType: 'string',
      instanceType: 'string',
      remark: 'string',
      riskLevel: 'string',
      sectionIds: { 'type': 'array', 'itemType': 'number' },
      solutionShrink: 'string',
      status: 'string',
      vendor: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sectionIds)) {
      $dara.Model.validateArray(this.sectionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

