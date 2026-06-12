// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceTemplateCriterionIssuesResponseBodyTemplateCriterionIssueListCriterionIssuesExtendInfo extends $dara.Model {
  /**
   * @remarks
   * The AssociationProperty of the ROS parameter.
   * 
   * @example
   * ChargeType
   */
  associationProperty?: string;
  /**
   * @remarks
   * The resource property.
   * 
   * @example
   * null
   */
  property?: string;
  /**
   * @remarks
   * The value of the resource property.
   * 
   * @example
   * null
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      associationProperty: 'AssociationProperty',
      property: 'Property',
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationProperty: 'string',
      property: 'string',
      propertyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateCriterionIssuesResponseBodyTemplateCriterionIssueListCriterionIssues extends $dara.Model {
  /**
   * @remarks
   * The supplementary information about the criterion issue.
   */
  extendInfo?: GetServiceTemplateCriterionIssuesResponseBodyTemplateCriterionIssueListCriterionIssuesExtendInfo;
  /**
   * @remarks
   * The severity level of the issue. Valid values:
   * 
   * - Mandatory: The issue must be fixed.
   * 
   * - Recommended: You are advised to fix the issue.
   * 
   * @example
   * Mandatory
   */
  level?: string;
  /**
   * @remarks
   * The position where the issue exists.
   * 
   * @example
   * $.Parameters.PayType
   */
  position?: string;
  /**
   * @remarks
   * The type of the criterion issue.
   * 
   * @example
   * ParameterNeedAssociationProperty
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'ExtendInfo',
      level: 'Level',
      position: 'Position',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: GetServiceTemplateCriterionIssuesResponseBodyTemplateCriterionIssueListCriterionIssuesExtendInfo,
      level: 'string',
      position: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.extendInfo && typeof (this.extendInfo as any).validate === 'function') {
      (this.extendInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateCriterionIssuesResponseBodyTemplateCriterionIssueList extends $dara.Model {
  /**
   * @remarks
   * The list of criterion issues.
   */
  criterionIssues?: GetServiceTemplateCriterionIssuesResponseBodyTemplateCriterionIssueListCriterionIssues[];
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  /**
   * @remarks
   * The URL of the template.
   * 
   * @example
   * http://service-private-info/xxx/ros/template/tpl-xxxx.json
   */
  templateUrl?: number;
  /**
   * @remarks
   * The total number of criterion issues in the service template.
   * 
   * @example
   * 3
   */
  totalCriterionIssueCount?: number;
  /**
   * @remarks
   * The number of mandatory criterion issues in the service template.
   * 
   * @example
   * 1
   */
  totalMandatoryCriterionIssueCount?: number;
  static names(): { [key: string]: string } {
    return {
      criterionIssues: 'CriterionIssues',
      templateName: 'TemplateName',
      templateUrl: 'TemplateUrl',
      totalCriterionIssueCount: 'TotalCriterionIssueCount',
      totalMandatoryCriterionIssueCount: 'TotalMandatoryCriterionIssueCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criterionIssues: { 'type': 'array', 'itemType': GetServiceTemplateCriterionIssuesResponseBodyTemplateCriterionIssueListCriterionIssues },
      templateName: 'string',
      templateUrl: 'number',
      totalCriterionIssueCount: 'number',
      totalMandatoryCriterionIssueCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.criterionIssues)) {
      $dara.Model.validateArray(this.criterionIssues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateCriterionIssuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A361BA9E-xxxx-xxxx-xxxx-C26E5180456E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of templates with criterion issues in the service.
   * 
   * @example
   * 1
   */
  riskyTemplateCount?: number;
  /**
   * @remarks
   * The list of criterion issues in the template.
   */
  templateCriterionIssueList?: GetServiceTemplateCriterionIssuesResponseBodyTemplateCriterionIssueList[];
  /**
   * @remarks
   * The total number of criterion issues in the service template.
   * 
   * @example
   * 3
   */
  totalCriterionIssueCount?: number;
  /**
   * @remarks
   * The number of mandatory criterion issues in the service template.
   * 
   * @example
   * 1
   */
  totalMandatoryCriterionIssueCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskyTemplateCount: 'RiskyTemplateCount',
      templateCriterionIssueList: 'TemplateCriterionIssueList',
      totalCriterionIssueCount: 'TotalCriterionIssueCount',
      totalMandatoryCriterionIssueCount: 'TotalMandatoryCriterionIssueCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskyTemplateCount: 'number',
      templateCriterionIssueList: { 'type': 'array', 'itemType': GetServiceTemplateCriterionIssuesResponseBodyTemplateCriterionIssueList },
      totalCriterionIssueCount: 'number',
      totalMandatoryCriterionIssueCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templateCriterionIssueList)) {
      $dara.Model.validateArray(this.templateCriterionIssueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

