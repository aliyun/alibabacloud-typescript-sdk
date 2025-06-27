// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmInstanceSystemCnameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @remarks
   * The CNAME record assigned by the system.
   * 
   * @example
   * gtm-cn-mp91004xxxx.gtm-a2b4.com
   */
  systemCname?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      systemCname: 'SystemCname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemCname: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

