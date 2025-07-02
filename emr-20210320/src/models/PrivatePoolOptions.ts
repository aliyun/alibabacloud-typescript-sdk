// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrivatePoolOptions extends $dara.Model {
  /**
   * @example
   * Open
   */
  matchCriteria?: string;
  /**
   * @example
   * eap-bp67acfmxazb4****
   */
  privatePoolIds?: string[];
  static names(): { [key: string]: string } {
    return {
      matchCriteria: 'MatchCriteria',
      privatePoolIds: 'PrivatePoolIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchCriteria: 'string',
      privatePoolIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.privatePoolIds)) {
      $dara.Model.validateArray(this.privatePoolIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

