// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetForwardStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fs-651b975a22aa019c
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

