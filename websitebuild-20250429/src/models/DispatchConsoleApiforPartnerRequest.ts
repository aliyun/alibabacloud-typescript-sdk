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
   * This parameter is required.
   * 
   * @example
   * disable
   */
  operation?: string;
  /**
   * @example
   * [\\"\\"]
   */
  params?: string;
  /**
   * @remarks
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

