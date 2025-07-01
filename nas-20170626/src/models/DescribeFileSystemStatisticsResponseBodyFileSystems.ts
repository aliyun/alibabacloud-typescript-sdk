// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystem } from "./DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystem";


export class DescribeFileSystemStatisticsResponseBodyFileSystems extends $dara.Model {
  fileSystem?: DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystem[];
  static names(): { [key: string]: string } {
    return {
      fileSystem: 'FileSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystem: { 'type': 'array', 'itemType': DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystem },
    };
  }

  validate() {
    if(Array.isArray(this.fileSystem)) {
      $dara.Model.validateArray(this.fileSystem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

