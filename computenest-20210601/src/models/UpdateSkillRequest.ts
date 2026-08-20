// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Required when SourceType is set to UPLOAD. The OSS URL of the skill package to upload.
   * 
   * @example
   * https://embedding-pic.oss-cn-beijing-internal.aliyuncs.com/skill-creator1.zip
   */
  ossUrl?: string;
  /**
   * @remarks
   * The collection of connection types required by the skill.
   */
  requiredConnections?: string[];
  /**
   * @remarks
   * The description of the skill.
   * 
   * @example
   * Create new skills.
   */
  skillDescription?: string;
  skillDisplayName?: string;
  /**
   * @remarks
   * The ID of the skill to update.
   * 
   * This parameter is required.
   * 
   * @example
   * s-xxxxx
   */
  skillId?: string;
  /**
   * @remarks
   * The labels of the skill.
   */
  skillLabels?: string[];
  /**
   * @remarks
   * The name of the skill.
   * 
   * @example
   * skill-creator
   */
  skillName?: string;
  /**
   * @remarks
   * Required when SourceType is set to COPY. The ID of the public skill.
   * 
   * @example
   * s-xxxxx
   */
  sourceSkillId?: string;
  /**
   * @remarks
   * The source type for updating the skill.
   * 
   * @example
   * COPY
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ossUrl: 'OssUrl',
      requiredConnections: 'RequiredConnections',
      skillDescription: 'SkillDescription',
      skillDisplayName: 'SkillDisplayName',
      skillId: 'SkillId',
      skillLabels: 'SkillLabels',
      skillName: 'SkillName',
      sourceSkillId: 'SourceSkillId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ossUrl: 'string',
      requiredConnections: { 'type': 'array', 'itemType': 'string' },
      skillDescription: 'string',
      skillDisplayName: 'string',
      skillId: 'string',
      skillLabels: { 'type': 'array', 'itemType': 'string' },
      skillName: 'string',
      sourceSkillId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.requiredConnections)) {
      $dara.Model.validateArray(this.requiredConnections);
    }
    if(Array.isArray(this.skillLabels)) {
      $dara.Model.validateArray(this.skillLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

