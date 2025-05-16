// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTextbookAssistantTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 700d4d9411efbe6e0
   * 
   * **if can be null:**
   * false
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 25032PS56C
   */
  model?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'deviceId',
      model: 'model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      model: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

