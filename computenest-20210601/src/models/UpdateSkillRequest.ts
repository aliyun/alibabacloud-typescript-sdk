// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * https://embedding-pic.oss-cn-beijing-internal.aliyuncs.com/30516570
   */
  ossUrl?: string;
  /**
   * @example
   * 11111
   */
  skillDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 06e9dca2-0ac9-4d2e-a965-e9db9c057e00
   */
  skillId?: string;
  skillLabels?: string[];
  /**
   * @example
   * 111111
   */
  skillName?: string;
  /**
   * @example
   * s-111
   */
  sourceSkillId?: string;
  /**
   * @remarks
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

