// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelCardsRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier of the model provider used to filter model cards by provider.
   * 
   * @example
   * provider-xxxxxxxx
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

