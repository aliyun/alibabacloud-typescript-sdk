// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAttachScriptsResponseBody extends $dara.Model {
  /**
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @example
   * Y2QgWnhiU0o=
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      script: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

