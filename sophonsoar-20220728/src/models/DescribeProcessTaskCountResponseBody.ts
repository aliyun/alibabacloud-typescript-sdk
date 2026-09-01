// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessTaskCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of tasks.
   * 
   * @example
   * 67
   */
  count?: number;
  /**
   * @remarks
   * The UUID of the entity.
   * 
   * @example
   * a680c9ae-****-4c39-****-0302****fc8e
   */
  entityUuid?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      entityUuid: 'EntityUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      entityUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTaskCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data that is returned.
   */
  data?: DescribeProcessTaskCountResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * e866cce0-****-41de-817e-****8d5e2650
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeProcessTaskCountResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

