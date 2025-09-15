// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserWafLogStatusResponseBody extends $dara.Model {
  /**
   * @example
   * wafng-logstore
   */
  logStoreName?: string;
  /**
   * @example
   * wafng-project-14316572********-cn-hangzhou
   */
  projectName?: boolean;
  /**
   * @example
   * D7861F61-5B61-****-A47C-6B19160*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStoreName: 'string',
      projectName: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

