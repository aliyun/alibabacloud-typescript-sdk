// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceEndpointResponseBodyEndpointsAclEntries extends $dara.Model {
  /**
   * @remarks
   * The information about the ACL.
   * 
   * @example
   * null
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

