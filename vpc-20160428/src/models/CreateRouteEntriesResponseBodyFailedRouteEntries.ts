// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteEntriesResponseBodyFailedRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the custom route entry that failed to be added.
   * 
   * @example
   * 192.168.0.0/24
   */
  dstCidrBlock?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * VPC_ROUTE_ENTRY_CIDR_BLOCK_DUPLICATE
   */
  failedCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Specified CIDR block is already exists, entry.cidrBlock=xxxx
   */
  failedMessage?: string;
  /**
   * @remarks
   * The ID of the next hop of the custom route entry that failed to be added.
   * 
   * @example
   * i-j6c2fp57q8rr4jlu****
   */
  nextHop?: string;
  static names(): { [key: string]: string } {
    return {
      dstCidrBlock: 'DstCidrBlock',
      failedCode: 'FailedCode',
      failedMessage: 'FailedMessage',
      nextHop: 'NextHop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstCidrBlock: 'string',
      failedCode: 'string',
      failedMessage: 'string',
      nextHop: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

