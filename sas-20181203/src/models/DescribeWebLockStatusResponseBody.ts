// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebLockStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total quota that you purchase for web tamper proofing.
   * 
   * @example
   * 32
   */
  authCount?: number;
  /**
   * @remarks
   * The associated tamper proofing quota.
   * 
   * @example
   * 2
   */
  bindCount?: number;
  /**
   * @remarks
   * The number of blocked processes.
   * 
   * @example
   * 48
   */
  blockCount?: number;
  /**
   * @remarks
   * The number of protected directories.
   * 
   * @example
   * 2
   */
  dirCount?: number;
  /**
   * @remarks
   * The timestamp generated when the quota for tamper proofing expires. Unit: millisecond.
   * 
   * @example
   * 1688090851000
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF46038
   */
  requestId?: string;
  /**
   * @remarks
   * The number of processes in the whitelist.
   * 
   * @example
   * 6
   */
  whiteCount?: number;
  static names(): { [key: string]: string } {
    return {
      authCount: 'AuthCount',
      bindCount: 'BindCount',
      blockCount: 'BlockCount',
      dirCount: 'DirCount',
      expireTime: 'ExpireTime',
      requestId: 'RequestId',
      whiteCount: 'WhiteCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCount: 'number',
      bindCount: 'number',
      blockCount: 'number',
      dirCount: 'number',
      expireTime: 'number',
      requestId: 'string',
      whiteCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

