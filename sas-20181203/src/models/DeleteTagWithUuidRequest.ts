// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTagWithUuidRequest extends $dara.Model {
  /**
   * @remarks
   * The label name.
   * 
   * This parameter is required.
   * 
   * @example
   * abc
   */
  tagName?: string;
  /**
   * @remarks
   * The list of server UUIDs.
   * > If UuidList is specified, Security Center deletes the label only from the servers included in UuidList. If UuidList is empty, Security Center deletes the label from all servers.
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

