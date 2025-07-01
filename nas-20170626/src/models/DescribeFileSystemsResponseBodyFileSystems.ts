// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFileSystemsResponseBodyFileSystemsFileSystem } from "./DescribeFileSystemsResponseBodyFileSystemsFileSystem";


export class DescribeFileSystemsResponseBodyFileSystems extends $dara.Model {
  fileSystem?: DescribeFileSystemsResponseBodyFileSystemsFileSystem[];
  static names(): { [key: string]: string } {
    return {
      fileSystem: 'FileSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystem: { 'type': 'array', 'itemType': DescribeFileSystemsResponseBodyFileSystemsFileSystem },
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

