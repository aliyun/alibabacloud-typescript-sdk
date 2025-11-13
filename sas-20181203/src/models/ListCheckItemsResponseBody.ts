// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckItemsResponseBodyCheckItemsAssistInfo extends $dara.Model {
  /**
   * @remarks
   * The type of the help information for the check item risk. Values:
   * 
   * - **text**：Text
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
   * test assistInfo.
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

export class ListCheckItemsResponseBodyCheckItemsCheckPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the requirement for the check item.
   * 
   * @example
   * 10000000001
   */
  requirementId?: number;
  /**
   * @remarks
   * The display name of the requirement for the check item.
   * 
   * @example
   * testRequirementShowName
   */
  requirementShowName?: string;
  /**
   * @remarks
   * The ID of the section for the check item.
   * 
   * @example
   * 10000000001
   */
  sectionId?: number;
  /**
   * @remarks
   * The display name of the section for the check item.
   * 
   * @example
   * testSectionShowName
   */
  sectionShowName?: string;
  /**
   * @remarks
   * 检查项的标准ID。
   * 
   * @example
   * 10000000001
   */
  standardId?: number;
  /**
   * @remarks
   * The display name of the standard for the check item.
   * 
   * @example
   * testStandardShowName
   */
  standardShowName?: string;
  /**
   * @remarks
   * The name of the associated policy category:
   * - **AISPM**：AI Configuration Management (AI-SPM)
   * - **KISPM**：Kubernetes Configuration Management (KSPM)
   * - **IDENTITY_PERMISSION**：Identity and Permission Management (CIEM)
   * - **RISK**：Security Risk
   * - **COMPLIANCE**：Compliance Risk
   * 
   * @example
   * AISPM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      requirementId: 'RequirementId',
      requirementShowName: 'RequirementShowName',
      sectionId: 'SectionId',
      sectionShowName: 'SectionShowName',
      standardId: 'StandardId',
      standardShowName: 'StandardShowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requirementId: 'number',
      requirementShowName: 'string',
      sectionId: 'number',
      sectionShowName: 'string',
      standardId: 'number',
      standardShowName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckItemsResponseBodyCheckItemsDescription extends $dara.Model {
  /**
   * @remarks
   * The type of the check description attribute. Values:
   * 
   * - **text**：Text
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The specific content of the description.
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

export class ListCheckItemsResponseBodyCheckItemsSolution extends $dara.Model {
  /**
   * @remarks
   * The type of the check item solution information. Values:
   * 
   * - **text**：Text
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
   * test solution.
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

export class ListCheckItemsResponseBodyCheckItems extends $dara.Model {
  /**
   * @remarks
   * The help information for the check item.
   */
  assistInfo?: ListCheckItemsResponseBodyCheckItemsAssistInfo;
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 100000000001
   */
  checkId?: number;
  /**
   * @remarks
   * A list of standard, regulation, and section information associated with the check result.
   */
  checkPolicies?: ListCheckItemsResponseBodyCheckItemsCheckPolicies[];
  /**
   * @remarks
   * 自定义检查项定义规则。
   * 
   * @example
   * {"AssociatedData":{"ToDataList":[{"DataName":"ACS_ECS_Instance","PropertyPath":"InstanceId","FromPropertyPath":"InstanceId"}]},"MatchProperty":{"Operator":"AND","MatchProperties":[{"DataName":"ACS_ECS_Disk","PropertyPath":"InstanceId","MatchOperator":"EQ","MatchPropertyValue":"testId"},{"DataName":"ACS_ECS_Instance","PropertyPath":"InstanceId","MatchOperator":"EQ","MatchPropertyValue":"testInstanceId"}]}}
   */
  checkRule?: string;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * testCheckItemName
   */
  checkShowName?: string;
  /**
   * @remarks
   * The source type of the Security Posture check item:
   *  - **CUSTOM**: User-defined
   *  - **SYSTEM**: Predefined by the Security Posture platform
   * 
   * @example
   * SYSTEM
   */
  checkType?: string;
  /**
   * @remarks
   * The description information of the check item.
   */
  description?: ListCheckItemsResponseBodyCheckItemsDescription;
  /**
   * @remarks
   * The sub-type of the cloud product\\"s asset.
   * 
   * @example
   * DISK
   */
  instanceSubType?: string;
  /**
   * @remarks
   * The asset type of the cloud product.
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
   * remark.
   */
  remark?: string;
  /**
   * @remarks
   * The risk level of the check item. Values:
   * - **HIGH**: High risk
   * - **MEDIUM**: Medium risk
   * - **LOW**: Low risk
   * 
   * @example
   * HIGH
   */
  riskLevel?: string;
  /**
   * @remarks
   * The solution information for the check item.
   */
  solution?: ListCheckItemsResponseBodyCheckItemsSolution;
  /**
   * @remarks
   * The status of the check item. Values:
   * - **EDIT**: In editing
   * - **RELEASE**: Released
   * 
   * @example
   * EDIT
   */
  status?: string;
  /**
   * @remarks
   * The cloud asset vendor.
   * 
   * @example
   * ALIYUN
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      assistInfo: 'AssistInfo',
      checkId: 'CheckId',
      checkPolicies: 'CheckPolicies',
      checkRule: 'CheckRule',
      checkShowName: 'CheckShowName',
      checkType: 'CheckType',
      description: 'Description',
      instanceSubType: 'InstanceSubType',
      instanceType: 'InstanceType',
      remark: 'Remark',
      riskLevel: 'RiskLevel',
      solution: 'Solution',
      status: 'Status',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistInfo: ListCheckItemsResponseBodyCheckItemsAssistInfo,
      checkId: 'number',
      checkPolicies: { 'type': 'array', 'itemType': ListCheckItemsResponseBodyCheckItemsCheckPolicies },
      checkRule: 'string',
      checkShowName: 'string',
      checkType: 'string',
      description: ListCheckItemsResponseBodyCheckItemsDescription,
      instanceSubType: 'string',
      instanceType: 'string',
      remark: 'string',
      riskLevel: 'string',
      solution: ListCheckItemsResponseBodyCheckItemsSolution,
      status: 'string',
      vendor: 'string',
    };
  }

  validate() {
    if(this.assistInfo && typeof (this.assistInfo as any).validate === 'function') {
      (this.assistInfo as any).validate();
    }
    if(Array.isArray(this.checkPolicies)) {
      $dara.Model.validateArray(this.checkPolicies);
    }
    if(this.description && typeof (this.description as any).validate === 'function') {
      (this.description as any).validate();
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

export class ListCheckItemsResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * Number of data entries displayed on the current page in a paginated query.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page when performing a paginated query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of records displayed per page when performing a paginated query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of data entries found.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Information about the check items.
   */
  checkItems?: ListCheckItemsResponseBodyCheckItems[];
  /**
   * @remarks
   * Page information for paginated queries.
   */
  pageInfo?: ListCheckItemsResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the current request, which is a unique identifier generated by Alibaba Cloud for this request and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 7BC55C8F-226E-5AF5-9A2C-2EC43864****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkItems: 'CheckItems',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItems: { 'type': 'array', 'itemType': ListCheckItemsResponseBodyCheckItems },
      pageInfo: ListCheckItemsResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkItems)) {
      $dara.Model.validateArray(this.checkItems);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

