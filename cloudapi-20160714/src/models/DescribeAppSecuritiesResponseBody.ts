// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppSecuritiesResponseBodyAppSecuritys } from "./DescribeAppSecuritiesResponseBodyAppSecuritys";


export class DescribeAppSecuritiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The associated security policy information.
   */
  appSecuritys?: DescribeAppSecuritiesResponseBodyAppSecuritys;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF924FE4-2EDD-4CD3-89EC-34E4708574E7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appSecuritys: 'AppSecuritys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecuritys: DescribeAppSecuritiesResponseBodyAppSecuritys,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appSecuritys && typeof (this.appSecuritys as any).validate === 'function') {
      (this.appSecuritys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

