// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociateMacSecKeyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0123456789ABCDEF0123456789ABCDEF
   */
  ckn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-bp1hp0wr072f6****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ckn: 'Ckn',
      physicalConnectionId: 'PhysicalConnectionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ckn: 'string',
      physicalConnectionId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

