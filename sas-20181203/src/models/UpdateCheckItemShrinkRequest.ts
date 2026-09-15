// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCheckItemShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The help information for the check item.
   */
  assistInfoShrink?: string;
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
  descriptionShrink?: string;
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
  solutionShrink?: string;
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

