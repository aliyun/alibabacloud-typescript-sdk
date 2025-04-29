// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePortRangeListsResponseBodyPortRangeLists } from "./DescribePortRangeListsResponseBodyPortRangeLists";


export class DescribePortRangeListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. If the return value is empty, no more data is returned.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * Details of the port lists.
   */
  portRangeLists?: DescribePortRangeListsResponseBodyPortRangeLists[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6040AD98-11C3-5F78-9346-FCA8E9D8960F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      portRangeLists: 'PortRangeLists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      portRangeLists: { 'type': 'array', 'itemType': DescribePortRangeListsResponseBodyPortRangeLists },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portRangeLists)) {
      $dara.Model.validateArray(this.portRangeLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

