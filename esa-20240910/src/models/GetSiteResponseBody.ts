// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSiteResponseBodySiteModel } from "./GetSiteResponseBodySiteModel";


export class GetSiteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9732E117-8A37-49FD-A36F-ABBB87556CA7
   */
  requestId?: string;
  /**
   * @remarks
   * The queried website information.
   */
  siteModel?: GetSiteResponseBodySiteModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      siteModel: 'SiteModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      siteModel: GetSiteResponseBodySiteModel,
    };
  }

  validate() {
    if(this.siteModel && typeof (this.siteModel as any).validate === 'function') {
      (this.siteModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

