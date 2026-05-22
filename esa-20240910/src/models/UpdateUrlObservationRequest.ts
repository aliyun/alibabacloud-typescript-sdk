// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUrlObservationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configId?: number;
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
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      sdkType: 'SdkType',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      sdkType: 'string',
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

