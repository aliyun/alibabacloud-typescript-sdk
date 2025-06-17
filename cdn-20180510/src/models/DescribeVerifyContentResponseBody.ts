// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The verification content.
   * 
   * @example
   * verify_dffeb6610035dcb77b413a59c32cd91f
   */
  content?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34AB41F1-04A5-496F-8C8D-634BDBE6A9FB
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

