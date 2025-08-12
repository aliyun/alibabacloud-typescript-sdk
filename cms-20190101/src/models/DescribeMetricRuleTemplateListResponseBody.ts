// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistoriesApplyHistory extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the alert template was applied to the application group.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1646055898000
   */
  applyTime?: number;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 3607****
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * ECS_Group
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      applyTime: 'ApplyTime',
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyTime: 'number',
      groupId: 'number',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistories extends $dara.Model {
  applyHistory?: DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistoriesApplyHistory[];
  static names(): { [key: string]: string } {
    return {
      applyHistory: 'ApplyHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyHistory: { 'type': 'array', 'itemType': DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistoriesApplyHistory },
    };
  }

  validate() {
    if(Array.isArray(this.applyHistory)) {
      $dara.Model.validateArray(this.applyHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponseBodyTemplatesTemplate extends $dara.Model {
  /**
   * @remarks
   * The history of applying the alert templates to application groups.
   */
  applyHistories?: DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistories;
  /**
   * @remarks
   * The description of the alert template.
   */
  description?: string;
  /**
   * @remarks
   * The timestamp when the alert template was created.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1646018798000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The timestamp when the alert template was modified.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1646054798000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The name of the alert template.
   * 
   * @example
   * ECS_Template1
   */
  name?: string;
  /**
   * @remarks
   * The version of the alert template.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  restVersion?: number;
  /**
   * @remarks
   * The ID of the alert template.
   * 
   * @example
   * 70****
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      applyHistories: 'ApplyHistories',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      name: 'Name',
      restVersion: 'RestVersion',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyHistories: DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistories,
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      name: 'string',
      restVersion: 'number',
      templateId: 'number',
    };
  }

  validate() {
    if(this.applyHistories && typeof (this.applyHistories as any).validate === 'function') {
      (this.applyHistories as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponseBodyTemplates extends $dara.Model {
  template?: DescribeMetricRuleTemplateListResponseBodyTemplatesTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': DescribeMetricRuleTemplateListResponseBodyTemplatesTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.template)) {
      $dara.Model.validateArray(this.template);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 659401C0-6214-5C02-972A-CFA929D717B7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The queried alert templates.
   */
  templates?: DescribeMetricRuleTemplateListResponseBodyTemplates;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      templates: 'Templates',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      templates: DescribeMetricRuleTemplateListResponseBodyTemplates,
      total: 'number',
    };
  }

  validate() {
    if(this.templates && typeof (this.templates as any).validate === 'function') {
      (this.templates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

