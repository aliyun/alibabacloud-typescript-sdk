// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPageShieldResponseBody extends $dara.Model {
  /**
   * @remarks
   * The switch status. Valid values:
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
   * The version number of the site. For sites with version management enabled, you can use this parameter to specify the site version on which the configuration takes effect. The default value is 0.
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

