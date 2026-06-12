// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token that ensures request idempotence. It must be unique for each request. The **ClientToken** can contain only ASCII characters and must be no more than 64 characters long.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Required when SourceType is set to UPLOAD. The OSS URL of the Skill package to upload.
   * 
   * @example
   * https://embedding-pic.oss-cn-beijing-internal.aliyuncs.com/30516570
   */
  ossUrl?: string;
  /**
   * @remarks
   * The description of the Skill.
   * 
   * @example
   * 11111
   */
  skillDescription?: string;
  /**
   * @remarks
   * The Skill labels.
   * 
   * @example
   * ["category:frontend-development"]
   */
  skillLabels?: string[];
  /**
   * @remarks
   * The name of the Skill.
   * 
   * @example
   * 11111
   */
  skillName?: string;
  /**
   * @remarks
   * The ID of the SkillSpace containing the Skill.
   * 
   * This parameter is required.
   * 
   * @example
   * ss-111111
   */
  skillSpaceId?: string;
  /**
   * @remarks
   * Required when SourceType is set to COPY. The ID of the public Skill.
   * 
   * @example
   * s-11111
   */
  sourceSkillId?: string;
  /**
   * @remarks
   * The creation method for the Skill.
   * 
   * This parameter is required.
   * 
   * @example
   * COPY
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ossUrl: 'OssUrl',
      skillDescription: 'SkillDescription',
      skillLabels: 'SkillLabels',
      skillName: 'SkillName',
      skillSpaceId: 'SkillSpaceId',
      sourceSkillId: 'SourceSkillId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ossUrl: 'string',
      skillDescription: 'string',
      skillLabels: { 'type': 'array', 'itemType': 'string' },
      skillName: 'string',
      skillSpaceId: 'string',
      sourceSkillId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.skillLabels)) {
      $dara.Model.validateArray(this.skillLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

