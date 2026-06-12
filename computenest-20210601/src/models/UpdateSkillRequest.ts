// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillRequest extends $dara.Model {
  /**
   * @remarks
   * A unique, client-generated token to ensure request idempotence. **ClientToken** can contain only ASCII characters and must not exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required if `SourceType` is set to `UPLOAD`. It specifies the Object Storage Service (OSS) URL of the compressed skill package to upload.
   * 
   * @example
   * https://embedding-pic.oss-cn-beijing-internal.aliyuncs.com/30516570
   */
  ossUrl?: string;
  /**
   * @remarks
   * The skill description.
   * 
   * @example
   * 11111
   */
  skillDescription?: string;
  /**
   * @remarks
   * The ID of the skill to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 06e9dca2-0ac9-4d2e-a965-e9db9c057e00
   */
  skillId?: string;
  /**
   * @remarks
   * An array of skill labels.
   */
  skillLabels?: string[];
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * 111111
   */
  skillName?: string;
  /**
   * @remarks
   * This parameter is required if `SourceType` is set to `COPY`. It specifies the ID of the public skill.
   * 
   * @example
   * s-111
   */
  sourceSkillId?: string;
  /**
   * @remarks
   * The source type for the skill update.
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
      skillDescription: 'string',
      skillId: 'string',
      skillLabels: { 'type': 'array', 'itemType': 'string' },
      skillName: 'string',
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

