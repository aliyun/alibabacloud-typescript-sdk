// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSpecResponseBodySpecInfoModel } from "./DescribeSpecResponseBodySpecInfoModel";


export class DescribeSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the current read position returned by this call. An empty value means that all data has been read.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D9888DAD-331E-5FBC-B5A0-F2445115****
   */
  requestId?: string;
  /**
   * @remarks
   * The specifications.
   */
  specInfoModel?: DescribeSpecResponseBodySpecInfoModel[];
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      specInfoModel: 'SpecInfoModel',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      specInfoModel: { 'type': 'array', 'itemType': DescribeSpecResponseBodySpecInfoModel },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.specInfoModel)) {
      $dara.Model.validateArray(this.specInfoModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

