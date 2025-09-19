// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainSecureScoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 11C96623-E106-59C9-866D-A6C82911****
   */
  requestId?: string;
  /**
   * @remarks
   * The security score of the website.
   * 
   * @example
   * 100
   */
  securityScore?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityScore: 'SecurityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

