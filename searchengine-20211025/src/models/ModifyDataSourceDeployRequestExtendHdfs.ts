// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataSourceDeployRequestExtendHdfs extends $dara.Model {
  /**
   * @remarks
   * The path of the Apsara File Storage for HDFS data source.
   * 
   * @example
   * ymsh-service/src/main/java/cn/ymsh/util/jd
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

