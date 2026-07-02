// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillRequest extends $dara.Model {
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
   * The OSS URL of the Skill package to upload. This parameter is required when SourceType is set to UPLOAD.
   * 
   * @example
   * https://embedding-pic.oss-cn-beijing-internal.aliyuncs.com/30516570
   */
  ossUrl?: string;
  /**
   * @remarks
   * The Skill description.
   * 
   * @example
   * 11111
   */
  skillDescription?: string;
  skillDisplayName?: string;
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
   * The Skill name.
   * 
   * @example
   * 11111
   */
  skillName?: string;
  /**
   * @remarks
   * The ID of the SkillSpace to which the Skill belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * ss-111111
   */
  skillSpaceId?: string;
  /**
   * @remarks
   * The public Skill ID. This parameter is required when SourceType is set to COPY.
   * 
   * @example
   * s-11111
   */
  sourceSkillId?: string;
  /**
   * @remarks
   * The source type used when creating the Skill.
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
      skillDisplayName: 'SkillDisplayName',
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
      skillDisplayName: 'string',
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

