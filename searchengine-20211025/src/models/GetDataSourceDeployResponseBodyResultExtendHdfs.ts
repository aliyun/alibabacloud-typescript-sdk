// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceDeployResponseBodyResultExtendHdfs extends $dara.Model {
  /**
   * @example
   * dist-dmj-job/src/main/java
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

