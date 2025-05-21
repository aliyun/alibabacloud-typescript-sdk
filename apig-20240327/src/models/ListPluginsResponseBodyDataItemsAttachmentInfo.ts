// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginsResponseBodyDataItemsAttachmentInfo extends $dara.Model {
  /**
   * @example
   * false
   */
  enable?: string;
  /**
   * @example
   * pa-ct2irn6m1hkreaen0t40
   */
  pluginAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      pluginAttachmentId: 'pluginAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
      pluginAttachmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

