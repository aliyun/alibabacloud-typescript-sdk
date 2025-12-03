// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppReleaseStageExecutionsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-06-25T07:26:18.000+00:00
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  number?: string;
  /**
   * @example
   * 2024-06-25T07:25:54.000+00:00
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @example
   * MANUAL
   */
  triggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      number: 'number',
      startTime: 'startTime',
      state: 'state',
      triggerMode: 'triggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      number: 'string',
      startTime: 'string',
      state: 'string',
      triggerMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppReleaseStageExecutionsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  data?: ListAppReleaseStageExecutionsResponseBodyData[];
  /**
   * @example
   * vxc2341gfssad12
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pages?: number;
  /**
   * @example
   * 20
   */
  perPage?: number;
  /**
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      data: 'data',
      nextToken: 'nextToken',
      pages: 'pages',
      perPage: 'perPage',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      data: { 'type': 'array', 'itemType': ListAppReleaseStageExecutionsResponseBodyData },
      nextToken: 'string',
      pages: 'number',
      perPage: 'number',
      total: 'number',
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

