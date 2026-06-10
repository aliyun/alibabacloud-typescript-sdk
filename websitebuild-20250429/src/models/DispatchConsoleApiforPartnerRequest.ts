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
   * Set the operation to perform on the alert. Valid values:
   * 
   * - **deal**: Handle the alert (fencing)
   * - **ignore**: Ignore
   * - **mark_mis_info**: Mark as false positive (add to whitelist)
   * - **rm_mark_mis_info**: Unmark as false positive (remove from whitelist)
   * - **offline_handled**: Mark as Completed
   * 
   * This parameter is required.
   * 
   * @example
   * disable
   */
  operation?: string;
  /**
   * @remarks
   * Error parameter.
   * 
   * @example
   * [\\"\\"]
   */
  params?: string;
  /**
   * @remarks
   * Product code
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

