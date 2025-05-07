// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDirectoriesResponseBodyDirectories } from "./DescribeDirectoriesResponseBodyDirectories";


export class DescribeDirectoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The directories.
   */
  directories?: DescribeDirectoriesResponseBodyDirectories[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F369A091-002F-49C8-AD55-02A77629****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directories: 'Directories',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectories },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.directories)) {
      $dara.Model.validateArray(this.directories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

