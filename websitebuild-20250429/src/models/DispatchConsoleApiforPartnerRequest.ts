// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DispatchConsoleAPIForPartnerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  liveToken?: string;
  /**
   * @remarks
   * The operation to perform on the alert. Valid values:
   * 
   * - **deal**: handles the alert (quarantine).
   * - **ignore**: ignores the alert.
   * - **mark_mis_info**: marks the alert as a false positive (adds it to the whitelist).
   * - **rm_mark_mis_info**: unmarks the alert as a false positive (removes it from the whitelist).
   * - **offline_handled**: marks the alert as handled.
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

