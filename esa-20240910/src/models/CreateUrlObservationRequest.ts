// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUrlObservationRequest extends $dara.Model {
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
   * automatic
   */
  sdkType?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456******
   */
  siteId?: number;
  /**
   * @remarks
   * The URL of the web page to monitor. If the site name is example.com, set Url to example.com/test or site DNS record name/path.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com/test
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

