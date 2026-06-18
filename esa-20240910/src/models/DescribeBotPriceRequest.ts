// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBotPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The bot instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * enterprise_bot
   */
  botInstanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      botInstanceLevel: 'BotInstanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botInstanceLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

