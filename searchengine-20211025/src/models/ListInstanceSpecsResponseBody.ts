// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceSpecsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The maximum storage of a single data node. Unit: GB.
   * 
   * @example
   * 600
   */
  maxDisk?: number;
  /**
   * @remarks
   * The memory of the instance. Unit: GB.
   * 
   * @example
   * 4
   */
  mem?: number;
  /**
   * @remarks
   * The minimum storage of a single data node. Unit: GB.
   * 
   * @example
   * 100
   */
  minDisk?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      maxDisk: 'maxDisk',
      mem: 'mem',
      minDisk: 'minDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      maxDisk: 'number',
      mem: 'number',
      minDisk: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSpecsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * The instance types.
   */
  result?: ListInstanceSpecsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInstanceSpecsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

