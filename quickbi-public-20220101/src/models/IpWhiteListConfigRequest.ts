// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IpWhiteListConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Required for increase and delete operations. The IP whitelist. Separate multiple IP addresses with commas.
   * 
   * @example
   * 60.205.254.120
   */
  ipWhiteList?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - ADD: incrementally adds entries.
   * - DELETE: deletes entries.
   * - QUERY: queries entries.
   * 
   * This parameter is required.
   * 
   * @example
   * add
   */
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      ipWhiteList: 'IpWhiteList',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhiteList: 'string',
      operation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

