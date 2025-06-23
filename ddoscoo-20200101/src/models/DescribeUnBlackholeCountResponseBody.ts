// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUnBlackholeCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The remaining quota that you can deactivate blackhole filtering.
   * 
   * @example
   * 5
   */
  remainCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 232929FA-40B6-4C53-9476-EE335ABA44CD
   */
  requestId?: string;
  /**
   * @remarks
   * The total quota that you can deactivate blackhole filtering.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      remainCount: 'RemainCount',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainCount: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

