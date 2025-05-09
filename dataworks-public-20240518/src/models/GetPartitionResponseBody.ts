// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Partition } from "./Partition";


export class GetPartitionResponseBody extends $dara.Model {
  partition?: Partition;
  /**
   * @example
   * D1E2E5BC-xxxx-xxxx-xxxx-xxxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      partition: 'Partition',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partition: Partition,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.partition && typeof (this.partition as any).validate === 'function') {
      (this.partition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

