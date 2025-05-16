// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteHundredThousandWhysDialogueRequestMessages } from "./ExecuteHundredThousandWhysDialogueRequestMessages";


export class ExecuteHundredThousandWhysDialogueRequest extends $dara.Model {
  /**
   * @example
   * CHILDREN
   */
  ageGroup?: string;
  /**
   * @example
   * 2f28670c-eba6-4afb-9610-0942c434a021
   */
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 700d4d9411efbe6e0
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 00:1A:2B:3C:4D:5E
   */
  macAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  messages?: ExecuteHundredThousandWhysDialogueRequestMessages[];
  static names(): { [key: string]: string } {
    return {
      ageGroup: 'ageGroup',
      chatId: 'chatId',
      deviceId: 'deviceId',
      macAddress: 'macAddress',
      messages: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ageGroup: 'string',
      chatId: 'string',
      deviceId: 'string',
      macAddress: 'string',
      messages: { 'type': 'array', 'itemType': ExecuteHundredThousandWhysDialogueRequestMessages },
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

