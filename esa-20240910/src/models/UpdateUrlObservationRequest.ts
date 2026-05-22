// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUrlObservationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration. You can call the [ListUrlObservations](~~ListUrlObservations~~) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * SDK integration. Valid values:
   * 
   * *   **automatic** (Recommended)
   * *   **manual**
   * 
   * This parameter is required.
   * 
   * @example
   * manual
   */
  sdkType?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](~~ListSites~~) operation.
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

