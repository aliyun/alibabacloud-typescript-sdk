// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartCloudNoteRequestCustomPromptCustomPromptContents } from "./StartCloudNoteRequestCustomPromptCustomPromptContents";


export class StartCloudNoteRequestCustomPrompt extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  customPromptContents?: StartCloudNoteRequestCustomPromptCustomPromptContents[];
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      customPromptContents: 'CustomPromptContents',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPromptContents: { 'type': 'array', 'itemType': StartCloudNoteRequestCustomPromptCustomPromptContents },
      enabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.customPromptContents)) {
      $dara.Model.validateArray(this.customPromptContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

