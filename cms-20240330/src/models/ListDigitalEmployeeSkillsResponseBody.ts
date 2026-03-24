// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDigitalEmployeeSkillsResponseBodySkills extends $dara.Model {
  /**
   * @remarks
   * The time when the skill was created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-02-06T14:09:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the skill.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the skill is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The name of the skill.
   * 
   * @example
   * test
   */
  skillName?: string;
  /**
   * @remarks
   * The time when the skill was last updated.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-02-06T14:09:11Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      enable: 'enable',
      skillName: 'skillName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      enable: 'boolean',
      skillName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDigitalEmployeeSkillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * sjC5rekx93Ew7K7VcmI3wkBZBYQ-GphB2ilQu3zJCGxoZuicwyJznfo2riTjr-lq
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0CEC5375-XXXX-XXXX-XXXX-9A629907C1F0
   */
  requestId?: string;
  /**
   * @remarks
   * The list of skills.
   */
  skills?: ListDigitalEmployeeSkillsResponseBodySkills[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 15
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      skills: 'skills',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      skills: { 'type': 'array', 'itemType': ListDigitalEmployeeSkillsResponseBodySkills },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

