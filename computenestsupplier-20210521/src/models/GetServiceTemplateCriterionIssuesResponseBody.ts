// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceTemplateCriterionIssuesResponseBodyTemplateCriterionIssueListCriterionIssuesExtendInfo extends $dara.Model {
  /**
   * @example
   * ChargeType
   */
  associationProperty?: string;
  /**
   * @example
   * null
   */
  property?: string;
  /**
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
  extendInfo?: GetServiceTemplateCriterionIssuesResponseBodyTemplateCriterionIssueListCriterionIssuesExtendInfo;
  /**
   * @example
   * Mandatory
   */
  level?: string;
  /**
   * @example
   * $.Parameters.PayType
   */
  position?: string;
  /**
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
  criterionIssues?: GetServiceTemplateCriterionIssuesResponseBodyTemplateCriterionIssueListCriterionIssues[];
  templateName?: string;
  /**
   * @example
   * http://service-private-info/xxx/ros/template/tpl-xxxx.json
   */
  templateUrl?: number;
  /**
   * @example
   * 3
   */
  totalCriterionIssueCount?: number;
  /**
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
   * @example
   * A361BA9E-xxxx-xxxx-xxxx-C26E5180456E
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  riskyTemplateCount?: number;
  templateCriterionIssueList?: GetServiceTemplateCriterionIssuesResponseBodyTemplateCriterionIssueList[];
  /**
   * @example
   * 3
   */
  totalCriterionIssueCount?: number;
  /**
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

