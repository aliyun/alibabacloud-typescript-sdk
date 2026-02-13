// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AISearchMessageItem } from "./AisearchMessageItem";


export class AISearchStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1a851c4a-1d65-11ef-99a7-ssfsfdd
   */
  folderId?: string;
  message?: AISearchMessageItem[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * “my net is slow, what can I do?”
   */
  question?: string;
  resourceTypeNeeded?: string[];
  static names(): { [key: string]: string } {
    return {
      folderId: 'folderId',
      message: 'message',
      question: 'question',
      resourceTypeNeeded: 'resourceTypeNeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      message: { 'type': 'array', 'itemType': AISearchMessageItem },
      question: 'string',
      resourceTypeNeeded: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    if(Array.isArray(this.resourceTypeNeeded)) {
      $dara.Model.validateArray(this.resourceTypeNeeded);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

