// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodVerifyContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The verification content.
   * 
   * @example
   * verify_dffeb661*****3a59c31cd91f
   */
  content?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34AB41F1-04A5-4688-634BDBE6****
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

