// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHbaseHaSlbRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bds-t4n3496whj23****
   */
  bdsId?: string;
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ha-v21tmnxjwh2yu****
   */
  haId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * thrift
   */
  haTypes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Active
   */
  hbaseType?: string;
  static names(): { [key: string]: string } {
    return {
      bdsId: 'BdsId',
      clientToken: 'ClientToken',
      haId: 'HaId',
      haTypes: 'HaTypes',
      hbaseType: 'HbaseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bdsId: 'string',
      clientToken: 'string',
      haId: 'string',
      haTypes: 'string',
      hbaseType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

