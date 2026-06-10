// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillRequest extends $dara.Model {
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
   * @example
   * ["category:frontend-development"]
   */
  skillLabels?: string[];
  /**
   * @example
   * 11111
   */
  skillName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ss-111111
   */
  skillSpaceId?: string;
  /**
   * @example
   * s-11111
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

