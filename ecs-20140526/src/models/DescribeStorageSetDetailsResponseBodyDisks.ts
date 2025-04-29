// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStorageSetDetailsResponseBodyDisksDisk } from "./DescribeStorageSetDetailsResponseBodyDisksDisk";


export class DescribeStorageSetDetailsResponseBodyDisks extends $dara.Model {
  disk?: DescribeStorageSetDetailsResponseBodyDisksDisk[];
  static names(): { [key: string]: string } {
    return {
      disk: 'Disk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: { 'type': 'array', 'itemType': DescribeStorageSetDetailsResponseBodyDisksDisk },
    };
  }

  validate() {
    if(Array.isArray(this.disk)) {
      $dara.Model.validateArray(this.disk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

