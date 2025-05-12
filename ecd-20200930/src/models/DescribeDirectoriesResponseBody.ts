// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDirectoriesResponseBodyDirectories } from "./DescribeDirectoriesResponseBodyDirectories";


export class DescribeDirectoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The hostname of the domain controller. The hostname must comply with the hostname naming convention of Windows. This parameter is returned only when the directory type is AD office network.
   * 
   * @example
   * cnshsv21hmc****
   */
  adHostname?: string;
  /**
   * @remarks
   * The directories.
   */
  directories?: DescribeDirectoriesResponseBodyDirectories[];
  /**
   * @remarks
   * The token that is used for the next query. If this parameter is empty, all results are returned.
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
   * F369A091-002F-49C8-AD55-02A776297C7B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      adHostname: 'AdHostname',
      directories: 'Directories',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adHostname: 'string',
      directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectories },
      nextToken: 'string',
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

