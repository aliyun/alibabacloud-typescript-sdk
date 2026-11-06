// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawSkillTemplateResponseBodySkillTemplates extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the template is actually created.
   * 
   * @example
   * 2026-03-21 12:00:00
   */
  created?: string;
  /**
   * @remarks
   * The last modification time of the parameter template.
   * 
   * @example
   * 2026-04-23 23:00:00
   */
  modified?: string;
  /**
   * @remarks
   * The description of the skill template.
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
   * pcpg-skill-**************
   */
  skillTemplateId?: string;
  /**
   * @remarks
   * The name of the skill template.
   * 
   * @example
   * skill-template-test
   */
  skillTemplateName?: string;
  /**
   * @remarks
   * The map of associated skill details. The key is the skill identifier, and the value is a JSON string that can be parsed into an array of skill details. Each array element contains skillName and version.
   * 
   * @example
   * {"skill1":"[{\\"skillName\\":\\"example-skill\\",\\"version\\":\\"1.0.0\\"}]"}
   */
  skills?: { [key: string]: string };
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
      modified: 'Modified',
      skillTemplateDesc: 'SkillTemplateDesc',
      skillTemplateId: 'SkillTemplateId',
      skillTemplateName: 'SkillTemplateName',
      skills: 'Skills',
      srcApplicationId: 'SrcApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'string',
      modified: 'string',
      skillTemplateDesc: 'string',
      skillTemplateId: 'string',
      skillTemplateName: 'string',
      skills: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      srcApplicationId: 'string',
    };
  }

  validate() {
    if(this.skills) {
      $dara.Model.validateMap(this.skills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawSkillTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CDB3258F-B5DE-43C4-8935-CBA0CA******
   */
  requestId?: string;
  /**
   * @remarks
   * The skill template group.
   */
  skillTemplates?: DescribePolarClawSkillTemplateResponseBodySkillTemplates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      skillTemplates: 'SkillTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      skillTemplates: { 'type': 'array', 'itemType': DescribePolarClawSkillTemplateResponseBodySkillTemplates },
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

