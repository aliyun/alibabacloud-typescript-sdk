// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNASFileSystemsResponseBodyFileSystems } from "./DescribeNasfileSystemsResponseBodyFileSystems";


export class DescribeNASFileSystemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The NAS file systems.
   */
  fileSystems?: DescribeNASFileSystemsResponseBodyFileSystems[];
  /**
   * @remarks
   * The token that determines the start point of the next query. This parameter is empty if no additional results exist.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 269BDB16-2CD8-4865-84BD-11C40BC21DB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystems: 'FileSystems',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystems: { 'type': 'array', 'itemType': DescribeNASFileSystemsResponseBodyFileSystems },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileSystems)) {
      $dara.Model.validateArray(this.fileSystems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

