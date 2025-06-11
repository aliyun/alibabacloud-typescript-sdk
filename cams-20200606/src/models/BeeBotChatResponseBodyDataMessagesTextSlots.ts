// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeeBotChatResponseBodyDataMessagesTextSlots extends $dara.Model {
  /**
   * @remarks
   * Whether it hits.
   * 
   * @example
   * false
   */
  hit?: boolean;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * Check weather intentions. city
   */
  name?: string;
  /**
   * @remarks
   * Original value.
   * 
   * @example
   * Beijing
   */
  origin?: string;
  /**
   * @remarks
   * Specific values.
   * 
   * @example
   * Beijing
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      hit: 'Hit',
      name: 'Name',
      origin: 'Origin',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: 'boolean',
      name: 'string',
      origin: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

