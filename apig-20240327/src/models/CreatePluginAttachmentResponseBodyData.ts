// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePluginAttachmentResponseBodyData extends $dara.Model {
  /**
   * @example
   * pa-cvs7jpmm1hkgihaqv4a0
   */
  pluginAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      pluginAttachmentId: 'pluginAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

