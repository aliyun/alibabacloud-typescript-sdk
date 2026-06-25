// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkBlacklistRequest extends $dara.Model {
  /**
   * @remarks
   * The query type. Valid values: IP and Domain. If you do not specify this parameter, information for both types is returned.
   * 
   * @example
   * IP
   * 
   * **if can be null:**
   * true
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

