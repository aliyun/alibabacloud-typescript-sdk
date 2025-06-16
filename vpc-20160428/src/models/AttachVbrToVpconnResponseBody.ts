// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachVbrToVpconnResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5356F028-0F5C-56FC-8574-897D24379041
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the hosted connection.
   * 
   * @example
   * pc-bp1mrgfbtmc9brre7****
   */
  virtualPhysicalConnection?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      virtualPhysicalConnection: 'VirtualPhysicalConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      virtualPhysicalConnection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

