// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSparkAppLogRootPathRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-dbclusterid
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The path of Object Storage Service (OSS) logs.
   * 
   * @example
   * oss://path/to/log
   */
  ossLogPath?: string;
  /**
   * @remarks
   * Specifies whether to use the default OSS log path.
   * 
   * @example
   * true
   */
  useDefaultOss?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ossLogPath: 'OssLogPath',
      useDefaultOss: 'UseDefaultOss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ossLogPath: 'string',
      useDefaultOss: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

