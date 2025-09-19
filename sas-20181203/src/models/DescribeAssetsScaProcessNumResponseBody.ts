// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetsScaProcessNumResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of Java processes.
   * 
   * >  If no processes exist on the asset, no statistical result is returned.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * >  If no processes exist on the asset, no statistical result is returned.
   * 
   * @example
   * 6690a46c-0edb-4663-a641-3629d1a9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetsScaProcessNumResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistical results.
   */
  data?: DescribeAssetsScaProcessNumResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ACF97412-FD09-4D1F-994F-34DF12BREF20
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
      data: { 'type': 'array', 'itemType': DescribeAssetsScaProcessNumResponseBodyData },
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

