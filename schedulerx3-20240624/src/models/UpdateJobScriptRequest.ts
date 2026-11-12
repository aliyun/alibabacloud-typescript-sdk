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
   * The task ID.
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
   * echo "Script path: $0"
   * echo "Task parameter: $1"
   * echo "Shard index = $2"
   * echo "Total shards = $3"
   * 
   * echo "Good bye!"
   * exit 0
   */
  scriptContent?: string;
  /**
   * @remarks
   * The script version description.
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

