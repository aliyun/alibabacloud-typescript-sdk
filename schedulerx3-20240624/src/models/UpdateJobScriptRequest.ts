// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobScriptRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @remarks
   * The script content.
   * 
   * @example
   * #!/bin/bash
   * echo "xxl-job: hello shell"
   * 
   * echo "脚本位置: $0"
   * echo "任务参数: $1"
   * echo "分片序号 = $2"
   * echo "分片总数 = $3"
   * 
   * echo "Good bye!"
   * exit 0
   */
  scriptContent?: string;
  /**
   * @remarks
   * The description of the script version.
   * 
   * This parameter is required.
   * 
   * @example
   * init version
   */
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobId: 'JobId',
      scriptContent: 'ScriptContent',
      versionDescription: 'VersionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      jobId: 'number',
      scriptContent: 'string',
      versionDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

