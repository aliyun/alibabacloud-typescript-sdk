// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AITeacherExpansionPracticeTaskGenerateResponseBodyDataRoleSet } from "./AiteacherExpansionPracticeTaskGenerateResponseBodyDataRoleSet";
import { AITeacherExpansionPracticeTaskGenerateResponseBodyDataTaskContent } from "./AiteacherExpansionPracticeTaskGenerateResponseBodyDataTaskContent";


export class AITeacherExpansionPracticeTaskGenerateResponseBodyData extends $dara.Model {
  /**
   * @example
   * In a career counseling session, we are going to discuss our dream jobs and the responsibilities associated with them. Alex, who dreams of becoming a professional travel blogger, will share the tasks and skills required for this role, while Jamie, aspiring to be a wildlife photographer, will outline the responsibilities and challenges of capturing nature\\"s moments. Both will explore how their interests align with the practical aspects of their chosen careers, discussing the potential for travel, creativity, and the impact of their work on society and the environment.
   */
  backgroundDescription?: string;
  roleSet?: AITeacherExpansionPracticeTaskGenerateResponseBodyDataRoleSet;
  /**
   * @example
   * Hey Jamie, do you know what a travel blogger does?
   */
  startSentence?: string;
  taskContent?: AITeacherExpansionPracticeTaskGenerateResponseBodyDataTaskContent[];
  /**
   * @example
   * textbook_dialogue
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundDescription: 'backgroundDescription',
      roleSet: 'roleSet',
      startSentence: 'startSentence',
      taskContent: 'taskContent',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundDescription: 'string',
      roleSet: AITeacherExpansionPracticeTaskGenerateResponseBodyDataRoleSet,
      startSentence: 'string',
      taskContent: { 'type': 'array', 'itemType': AITeacherExpansionPracticeTaskGenerateResponseBodyDataTaskContent },
      taskType: 'string',
    };
  }

  validate() {
    if(this.roleSet && typeof (this.roleSet as any).validate === 'function') {
      (this.roleSet as any).validate();
    }
    if(Array.isArray(this.taskContent)) {
      $dara.Model.validateArray(this.taskContent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

