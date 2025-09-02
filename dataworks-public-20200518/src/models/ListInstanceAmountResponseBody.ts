// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceAmountResponseBodyInstanceCounts extends $dara.Model {
  /**
   * @remarks
   * The number of auto triggered node instances.
   * 
   * @example
   * 9527
   */
  count?: number;
  /**
   * @remarks
   * The data timestamp at which the number of auto triggered node instances was obtained. This value is a UNIX timestamp.
   * 
   * @example
   * 1623772800000
   */
  date?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      date: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAmountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The trend of the number of auto triggered node instances within the specified period of time.
   */
  instanceCounts?: ListInstanceAmountResponseBodyInstanceCounts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95279527adhfj****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCounts: 'InstanceCounts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCounts: { 'type': 'array', 'itemType': ListInstanceAmountResponseBodyInstanceCounts },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceCounts)) {
      $dara.Model.validateArray(this.instanceCounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

