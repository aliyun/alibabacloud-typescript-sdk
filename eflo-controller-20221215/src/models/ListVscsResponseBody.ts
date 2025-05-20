// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVscsResponseBodyVscs } from "./ListVscsResponseBodyVscs";


export class ListVscsResponseBody extends $dara.Model {
  /**
   * @remarks
   * No return. Please use TotalCount
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * Indicates the position of the current call return read. An empty value means that the data has been fully read.
   * 
   * This parameter is required.
   * 
   * @example
   * 3a6b93229825ac667104463b56790c91
   */
  nextToken?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 03668372-18FF-5959-98D9-6B36A4643C7A
   */
  requestId?: string;
  /**
   * @remarks
   * Total count of data under the current request conditions
   * 
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @remarks
   * VSC list
   */
  vscs?: ListVscsResponseBodyVscs[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vscs: 'Vscs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      vscs: { 'type': 'array', 'itemType': ListVscsResponseBodyVscs },
    };
  }

  validate() {
    if(Array.isArray(this.vscs)) {
      $dara.Model.validateArray(this.vscs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

