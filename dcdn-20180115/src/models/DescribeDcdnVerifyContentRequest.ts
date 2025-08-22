// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnVerifyContentRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name for which you want to query the ownership verification content. You can specify only one domain name in one request.
   * 
   * This parameter is required.
   * 
   * @example
   * **example**.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

