// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTransportLayerApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 170996390868****
   */
  applicationId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

