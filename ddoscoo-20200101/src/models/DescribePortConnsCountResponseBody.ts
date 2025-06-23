// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortConnsCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of active connections.
   * 
   * @example
   * 159
   */
  actConns?: number;
  /**
   * @remarks
   * The number of concurrent connections.
   * 
   * @example
   * 46340
   */
  conns?: number;
  /**
   * @remarks
   * The number of new connections.
   * 
   * @example
   * 0
   */
  cps?: number;
  /**
   * @remarks
   * The number of inactive connections.
   * 
   * @example
   * 121
   */
  inActConns?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 48859E14-A9FB-4100-99FF-AAB75CA46776
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actConns: 'ActConns',
      conns: 'Conns',
      cps: 'Cps',
      inActConns: 'InActConns',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actConns: 'number',
      conns: 'number',
      cps: 'number',
      inActConns: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

