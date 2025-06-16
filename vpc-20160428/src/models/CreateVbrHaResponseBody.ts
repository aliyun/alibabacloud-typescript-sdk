// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVbrHaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the VBR failover group.
   * 
   * @example
   * vbrha-sa1sxheuxtd98****
   */
  vbrHaId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vbrHaId: 'VbrHaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vbrHaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

