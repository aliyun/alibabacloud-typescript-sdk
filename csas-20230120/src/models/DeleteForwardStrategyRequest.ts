// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteForwardStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fs-3fb9b5ae28ee5416
   */
  forwardId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardId: 'ForwardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

