// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOnlineConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the domain
   * 
   * This parameter is required.
   * 
   * @example
   * sz_vpc_domain_1
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

