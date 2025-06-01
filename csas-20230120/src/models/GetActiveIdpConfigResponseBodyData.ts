// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetActiveIdpConfigResponseBodyData extends $dara.Model {
  description?: string;
  /**
   * @example
   * idp-cfg001
   */
  id?: string;
  name?: string;
  /**
   * @example
   * DingTalk
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      name: 'string',
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

