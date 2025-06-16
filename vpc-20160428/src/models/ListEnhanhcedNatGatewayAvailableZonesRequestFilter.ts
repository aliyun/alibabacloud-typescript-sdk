// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnhanhcedNatGatewayAvailableZonesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key. Only **PrivateLinkEnabled** is supported.
   * 
   * @example
   * PrivateLinkEnabled
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter key.
   * 
   * >  If the filter key is set to **PrivateLinkEnabled**, you must specify a filter value. Valid values: **true** and **false**.
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

