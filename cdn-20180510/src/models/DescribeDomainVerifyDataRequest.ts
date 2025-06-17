// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainVerifyDataRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. You can specify only one domain name in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * www.yourdomain.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to enable the global resource plan.
   * 
   * Valid values:
   * 
   * *   off
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   on
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * off
   */
  globalResourcePlan?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      globalResourcePlan: 'GlobalResourcePlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      globalResourcePlan: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

