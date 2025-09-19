// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTagWithUuidRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * abc
   */
  tagName?: string;
  /**
   * @remarks
   * The UUIDs of servers.
   * 
   * > If the UuidList parameter is specified, Security Center removes the tag only from the servers whose UUIDs are specified by UuidList. If the UuidList parameter is not specified, Security Center removes the tag from all servers.
   * 
   * @example
   * 111-xx,aa-bb
   */
  uuidList?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      uuidList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

