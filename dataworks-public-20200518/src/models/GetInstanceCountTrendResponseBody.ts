// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceCountTrendResponseBodyInstanceCounts extends $dara.Model {
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 9527
   */
  count?: number;
  /**
   * @remarks
   * The data timestamp.
   * 
   * @example
   * 1600963200000
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

export class GetInstanceCountTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The quantity trend of instances.
   */
  instanceCounts?: GetInstanceCountTrendResponseBodyInstanceCounts[];
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
      instanceCounts: { 'type': 'array', 'itemType': GetInstanceCountTrendResponseBodyInstanceCounts },
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

