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
   * amv-bp169ea59k****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The OSS log path.
   * 
   * @example
   * oss://testBucketname/to/log
   */
  ossLogPath?: string;
  /**
   * @remarks
   * Specifies whether to use the default OSS path.
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

