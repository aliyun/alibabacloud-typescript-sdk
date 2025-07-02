// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OutputCodeLocation extends $dara.Model {
  /**
   * @example
   * https://xyz.oss-cn-shanghai.aliyuncs.com/xxx/xxx/xxx
   */
  location?: string;
  /**
   * @example
   * OSS
   */
  repositoryType?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'location',
      repositoryType: 'repositoryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      repositoryType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

