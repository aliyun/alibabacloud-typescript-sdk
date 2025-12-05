// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSceneBatchEditingJobRequest extends $dara.Model {
  /**
   * @remarks
   * The output configuration. The structure is the same as the [OutputConfig](https://help.aliyun.com/zh/ims/use-cases/create-highlight-videos?spm=a2c4g.11186623.help-menu-193643.d_3_2_0_3.3af86997GreVu9\\&scm=20140722.H_2863940._.OR_help-T_cn~zh-V_1#4111a373d0xbz) for batch video generation, except that Count and GeneratePreviewOnly are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "MediaURL": "http://test-bucket.oss-cn-shanghai.aliyuncs.com/xxx_{index}.mp4",
   *   "Width": 1080,
   *   "Height": 1920
   * }
   */
  outputConfig?: string;
  /**
   * @remarks
   * A comma-separated list of editing project IDs. The video is rendered based on the timeline from each project.
   * 
   * This parameter is required.
   * 
   * @example
   * ****ae91539d46bb9000f74b40b80dd2,****ae91539000f74b40b80dd9d46bb
   */
  projectIds?: string;
  /**
   * @remarks
   * Custom user data, including callback configurations. For more information, see [UserData](~~357745#section-urj-v3f-0s1~~).
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      outputConfig: 'OutputConfig',
      projectIds: 'ProjectIds',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputConfig: 'string',
      projectIds: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

