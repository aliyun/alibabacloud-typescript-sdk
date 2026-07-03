// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDetectionRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the detection rule.
   * 
   * This parameter is required.
   * 
   * @example
   * dr-53np4nguf5jmh1vc****
   */
  detectionRuleId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region of the Management Hub. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: The assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: The assets are outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. This parameter is used by an administrator to switch to the perspective of a member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      detectionRuleId: 'DetectionRuleId',
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectionRuleId: 'string',
      lang: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

