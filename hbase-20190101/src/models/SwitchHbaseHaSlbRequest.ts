// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchHbaseHaSlbRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bds-t4n3496whj23ia4k
   */
  bdsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ha-v21tmnxjwh2yuy1il
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
      haId: 'HaId',
      haTypes: 'HaTypes',
      hbaseType: 'HbaseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bdsId: 'string',
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

