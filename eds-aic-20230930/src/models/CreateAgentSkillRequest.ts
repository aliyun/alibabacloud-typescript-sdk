// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The list of files in the skill package.
   */
  fileList?: string[];
  /**
   * @remarks
   * The icon of the custom skill.
   * 
   * @example
   * icon01
   */
  iconKey?: string;
  /**
   * @remarks
   * The OSS path of the skill package. This parameter is reserved by the system and does not need to be specified.
   * 
   * @example
   * test/sk-test/current/skill.zip
   */
  packageOssKey?: string;
  /**
   * @remarks
   * The skill description.
   * 
   * @example
   * Current weather and forecasts with wttr.in via curl for locations, rain, temperature, travel planning.
   */
  skillDescription?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * weather-enhanced
   */
  skillName?: string;
  /**
   * @remarks
   * The OSS download URL of the skill package. This parameter is required for API calls.
   * 
   * @example
   * https://test.oss-cn-hangzhou.aliyuncs.com/weather_skill.zip?Expires=1788168088&OSSAccessKeyId=****
   */
  skillPackageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileList: 'FileList',
      iconKey: 'IconKey',
      packageOssKey: 'PackageOssKey',
      skillDescription: 'SkillDescription',
      skillName: 'SkillName',
      skillPackageUrl: 'SkillPackageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileList: { 'type': 'array', 'itemType': 'string' },
      iconKey: 'string',
      packageOssKey: 'string',
      skillDescription: 'string',
      skillName: 'string',
      skillPackageUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileList)) {
      $dara.Model.validateArray(this.fileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

