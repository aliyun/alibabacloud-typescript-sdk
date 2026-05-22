// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUrlObservationRequest extends $dara.Model {
  /**
   * @remarks
   * SDK integration. Supported
   * 
   * *   **automatic**
   * *   **manual**
   * 
   * This parameter is required.
   * 
   * @example
   * automatic
   */
  sdkType?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456******
   */
  siteId?: number;
  /**
   * @remarks
   * The URL of the web page to monitor.
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

