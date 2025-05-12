// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceEndpointResponseBodyAclEntries extends $dara.Model {
  /**
   * @remarks
   * Remarks for public IP address whitelists.
   * 
   * @example
   * 1
   */
  comment?: string;
  /**
   * @remarks
   * The public IP address whitelist.
   * 
   * @example
   * 192.168.1.0/24
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      entry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

