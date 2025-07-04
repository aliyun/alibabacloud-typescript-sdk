// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceDeployResponseBodyResultExtendSaro extends $dara.Model {
  /**
   * @example
   * dist-dmj-job/src/main/java
   */
  path?: string;
  /**
   * @example
   * 0.6.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

