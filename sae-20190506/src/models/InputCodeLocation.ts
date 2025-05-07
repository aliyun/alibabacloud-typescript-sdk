// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InputCodeLocation extends $dara.Model {
  ossBucketName?: string;
  ossObjectName?: string;
  zipFile?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucketName: 'ossBucketName',
      ossObjectName: 'ossObjectName',
      zipFile: 'zipFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucketName: 'string',
      ossObjectName: 'string',
      zipFile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

