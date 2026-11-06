// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawSkillTemplatesResponseBodySkillTemplates extends $dara.Model {
  /**
   * @remarks
   * The time when the skill template was created in UTC.
   * 
   * @example
   * 2022-11-15T16:00Z
   */
  created?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 423
   */
  id?: string;
  /**
   * @remarks
   * The time when the skill template was last modified in UTC.
   * 
   * @example
   * 2022-11-16T16:00Z
   */
  modified?: string;
  /**
   * @remarks
   * The number of skills.
   * 
   * @example
   * 10
   */
  skillCounts?: string;
  /**
   * @remarks
   * The skill template description.
   * 
   * @example
   * skill template for test
   */
  skillTemplateDesc?: string;
  /**
   * @remarks
   * The skill template ID.
   * 
   * @example
   * pcpg-skill-2ze5v8n27o7x92a
   */
  skillTemplateId?: string;
  /**
   * @remarks
   * The skill template name.
   * 
   * @example
   * skill-template-test
   */
  skillTemplateName?: string;
  /**
   * @remarks
   * The skill templatetype. Valid values: 0: system template. 1: user template.
   * 
   * @example
   * 1
   */
  skillTemplateType?: string;
  /**
   * @remarks
   * The source application ID.
   * 
   * @example
   * pa-**************
   */
  srcApplicationId?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'Created',
      id: 'Id',
      modified: 'Modified',
      skillCounts: 'SkillCounts',
      skillTemplateDesc: 'SkillTemplateDesc',
      skillTemplateId: 'SkillTemplateId',
      skillTemplateName: 'SkillTemplateName',
      skillTemplateType: 'SkillTemplateType',
      srcApplicationId: 'SrcApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'string',
      id: 'string',
      modified: 'string',
      skillCounts: 'string',
      skillTemplateDesc: 'string',
      skillTemplateId: 'string',
      skillTemplateName: 'string',
      skillTemplateType: 'string',
      srcApplicationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawSkillTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 925B84D9-CA72-432C-95CF-738C22******
   */
  requestId?: string;
  /**
   * @remarks
   * The skill templates.
   */
  skillTemplates?: DescribePolarClawSkillTemplatesResponseBodySkillTemplates[];
  /**
   * @remarks
   * The total number of entries. This parameter is returned only when you query a list.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      skillTemplates: 'SkillTemplates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      skillTemplates: { 'type': 'array', 'itemType': DescribePolarClawSkillTemplatesResponseBodySkillTemplates },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.skillTemplates)) {
      $dara.Model.validateArray(this.skillTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

