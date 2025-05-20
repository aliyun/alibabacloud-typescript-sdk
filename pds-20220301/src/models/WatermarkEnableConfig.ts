// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WatermarkEnableConfig extends $dara.Model {
  displayAccessUserName?: boolean;
  displayCustomText?: string;
  displayShareLinkCreatorName?: boolean;
  enableDocPreview?: boolean;
  static names(): { [key: string]: string } {
    return {
      displayAccessUserName: 'display_access_user_name',
      displayCustomText: 'display_custom_text',
      displayShareLinkCreatorName: 'display_shareLink_creator_name',
      enableDocPreview: 'enable_doc_preview',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayAccessUserName: 'boolean',
      displayCustomText: 'string',
      displayShareLinkCreatorName: 'boolean',
      enableDocPreview: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

