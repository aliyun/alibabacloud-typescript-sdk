// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUrlObservationRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. You can call the [ListUrlObservations](~~ListUrlObservations~~) operation to obtain the configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * The SDK integration method. Valid values:
   * 
   * - **automatic**: automatic integration.
   * - **manual**: manual integration.
   * 
   * This parameter is required.
   * 
   * @example
   * manual
   */
  sdkType?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789****
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

