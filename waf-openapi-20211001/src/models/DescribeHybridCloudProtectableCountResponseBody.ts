// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudProtectableCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of protection nodes that can be added to the hybrid cloud cluster.
   * 
   * @example
   * 1
   */
  protectableCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6087EA47-C10F-5A0A-A405-DB5B241**B1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      protectableCount: 'ProtectableCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectableCount: 'number',
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

