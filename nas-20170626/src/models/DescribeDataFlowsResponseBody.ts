// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataFlowsResponseBodyDataFlowInfo } from "./DescribeDataFlowsResponseBodyDataFlowInfo";


export class DescribeDataFlowsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about data flows.
   */
  dataFlowInfo?: DescribeDataFlowsResponseBodyDataFlowInfo;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataFlowInfo: 'DataFlowInfo',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFlowInfo: DescribeDataFlowsResponseBodyDataFlowInfo,
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataFlowInfo && typeof (this.dataFlowInfo as any).validate === 'function') {
      (this.dataFlowInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

