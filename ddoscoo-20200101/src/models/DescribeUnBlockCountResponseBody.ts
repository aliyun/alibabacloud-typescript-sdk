// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUnBlockCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The remaining number of times that you can enable the near-origin traffic diversion feature.
   * 
   * @example
   * 7
   */
  remainCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of times that you can enable the near-origin traffic diversion feature.
   * 
   * @example
   * 10
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

