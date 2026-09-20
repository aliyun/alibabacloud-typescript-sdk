// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHbaseHaSlbRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the BDS cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * bds-t4n3496whj23****
   */
  bdsId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The value cannot exceed 64 printable ASCII characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The high-availability ID in the BDS active-active management.
   * 
   * This parameter is required.
   * 
   * @example
   * ha-v21tmnxjwh2yu****
   */
  haId?: string;
  /**
   * @remarks
   * The high-availability type. Valid values:
   * 
   * - thrift
   * - phoenix.
   * 
   * This parameter is required.
   * 
   * @example
   * thrift
   */
  haTypes?: string;
  /**
   * @remarks
   * Specifies whether the high-availability type is on the primary or secondary instance. Valid values:
   * 
   * - Active: The high-availability type is on the primary instance.
   * - Standby: The high-availability type is on the secondary instance.
   * 
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

