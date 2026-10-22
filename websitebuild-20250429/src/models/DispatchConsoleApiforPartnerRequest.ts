// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DispatchConsoleAPIForPartnerRequest extends $dara.Model {
  /**
   * @remarks
   * The access token obtained by calling GetUserAccessTokenForPartner.
   * 
   * This parameter is required.
   */
  liveToken?: string;
  /**
   * @remarks
   * Specifies the operation to perform on the alert. Valid values:
   * 
   * - **deal**: Handles the alert (quarantine).
   * - **ignore**: Ignores the alert.
   * - **mark_mis_info**: Marks the alert as a false positive (adds to the whitelist).
   * - **rm_mark_mis_info**: Unmarks the alert as a false positive (removes from the whitelist).
   * - **offline_handled**: Marks the alert as handled.
   * 
   * This parameter is required.
   * 
   * @example
   * disable
   */
  operation?: string;
  /**
   * @remarks
   * The error parameters.
   * 
   * @example
   * [\\"\\"]
   */
  params?: string;
  /**
   * @remarks
   * The product code.
   * 
   * This parameter is required.
   * 
   * @example
   * hbaseue
   */
  product?: string;
  /**
   * @remarks
   * The website domain name.
   * 
   * @example
   * abcd.scd.wanwang.xin
   */
  siteHost?: string;
  static names(): { [key: string]: string } {
    return {
      liveToken: 'LiveToken',
      operation: 'Operation',
      params: 'Params',
      product: 'Product',
      siteHost: 'SiteHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveToken: 'string',
      operation: 'string',
      params: 'string',
      product: 'string',
      siteHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

