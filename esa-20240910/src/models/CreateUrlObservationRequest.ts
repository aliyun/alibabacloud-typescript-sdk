// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUrlObservationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  sdkType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      sdkType: 'SdkType',
      siteId: 'SiteId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sdkType: 'string',
      siteId: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

