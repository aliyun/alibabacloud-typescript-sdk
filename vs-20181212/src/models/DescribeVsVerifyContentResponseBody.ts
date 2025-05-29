// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsVerifyContentResponseBody extends $dara.Model {
  /**
   * @example
   * verify_dffeb6610035dcb77b413a59c3*****
   */
  content?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

