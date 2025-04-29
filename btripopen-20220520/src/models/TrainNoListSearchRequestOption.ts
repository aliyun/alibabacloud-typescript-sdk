// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainNoListSearchRequestOption extends $dara.Model {
  /**
   * @example
   * false
   */
  needTransfer?: boolean;
  static names(): { [key: string]: string } {
    return {
      needTransfer: 'need_transfer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needTransfer: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

