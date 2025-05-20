// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTextGenerationRequestMessages } from "./GetTextGenerationRequestMessages";


export class GetTextGenerationRequest extends $dara.Model {
  csiLevel?: string;
  enableSearch?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  messages?: GetTextGenerationRequestMessages[];
  parameters?: { [key: string]: any };
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      csiLevel: 'csi_level',
      enableSearch: 'enable_search',
      messages: 'messages',
      parameters: 'parameters',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csiLevel: 'string',
      enableSearch: 'boolean',
      messages: { 'type': 'array', 'itemType': GetTextGenerationRequestMessages },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      stream: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

