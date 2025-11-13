// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSceneBatchEditingJobRequest extends $dara.Model {
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * ****ae91539d46bb9000f74b40b80dd2,****ae91539000f74b40b80dd9d46bb
   */
  projectIds?: string;
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

