// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceConsoleOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded command output of the instance.
   * 
   * @example
   * V2VsY29tZSB0byBDZW50T1MgCgpDaGVja2luZyBmaWxlc3lzdGVtcwpDaGVja2luZyBhbGwgZmlsZSBzeXN0ZW1zLgpbL3NiaW4vZnNjay5leHQ0ICgxKSAtLSAvXSBmc2NrLmV4dDQgLWEgL2Rldi92ZGExIAovZGV2L3ZkYTE6IGNsZWFuLCAzMjAxNi8yNjIxNDQwIGZpbGVzLCA0NDc5NzQvMTA0ODU1MDQgYmxvY2tzCgpFbnRlcmluZyBub24taW50ZXJhY3RpdmUgc3RhcnR1cApDYWxsaW5nIHRoZSBzeXN0ZW0gYWN0aXZpdHkgZGF0YSBjb2xsZWN0b3IgKHNhZGMpLi4uIAoKQnJpbmdpbmcgdXAgaW50ZXJmYWNlIGV0aDA6ICAKRGV0ZXJtaW5pbmcgSVAgaW5mb3JtYXRpb24gZm9yIGV0aDAuLi4gZG9uZS4KCmFsaXl1bi1zZXJ2aWNlIHN0YXJ0L3J1bm5pbmcsIHByb2Nlc3MgMTczMwpmaW5pc2hlZAoKQ2VudE9TIHJlbGVhc2UgNi44IChGaW5hbCkKS2VybmVsIDIuNi4zMi02OTYuMy4yLmVsNi5pNjg2IG9uIGFuIGk2ODYKCmlaMnplZDk2ZTQ2MmF5cjBxeioqKioqIGxvZ2luOg==
   */
  consoleOutput?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1c1xhsrac2coiw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the last log entry was generated in the Linux kernel. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mmZ format. The time is displayed in UTC+8.
   * 
   * @example
   * 2018-03-22 10:04:57
   */
  lastUpdateTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      consoleOutput: 'ConsoleOutput',
      instanceId: 'InstanceId',
      lastUpdateTime: 'LastUpdateTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleOutput: 'string',
      instanceId: 'string',
      lastUpdateTime: 'string',
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

