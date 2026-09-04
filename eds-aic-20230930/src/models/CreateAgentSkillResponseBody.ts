// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentSkillResponseBodySkillInfo extends $dara.Model {
  /**
   * @remarks
   * The skill description.
   * 
   * @example
   * Current weather and forecasts with wttr.in via curl for locations, rain, temperature, travel planning.
   */
  description?: string;
  /**
   * @remarks
   * The skill summary.
   * 
   * @example
   * Current weather and forecasts.
   */
  instruction?: string;
  /**
   * @remarks
   * The unique ID of the skill.
   * 
   * @example
   * sk-051j4pbwxzgol****
   */
  skillId?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * dev-spec
   */
  skillName?: string;
  /**
   * @remarks
   * The skill status.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The skill type.
   * 
   * @example
   * CUSTOM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instruction: 'Instruction',
      skillId: 'SkillId',
      skillName: 'SkillName',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instruction: 'string',
      skillId: 'string',
      skillName: 'string',
      status: 'string',
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

export class CreateAgentSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
   * @remarks
   * The skill information.
   */
  skillInfo?: CreateAgentSkillResponseBodySkillInfo[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      skillInfo: 'SkillInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      skillInfo: { 'type': 'array', 'itemType': CreateAgentSkillResponseBodySkillInfo },
    };
  }

  validate() {
    if(Array.isArray(this.skillInfo)) {
      $dara.Model.validateArray(this.skillInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

