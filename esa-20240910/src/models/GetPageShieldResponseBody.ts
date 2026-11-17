// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPageShieldResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the feature is enabled. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The report URI.
   * 
   * @example
   * /test
   */
  reportUri?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F32C57AA-7BF8-49AE-A2CC-9F42390F5A19
   */
  requestId?: string;
  /**
   * @remarks
   * The version number of the site. For a site with version management enabled, you can use this parameter to specify the site version to which the configuration applies. Default value: 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      reportUri: 'ReportUri',
      requestId: 'RequestId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
      reportUri: 'string',
      requestId: 'string',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

