// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDictRequestFilesOssObject } from "./UpdateDictRequestFilesOssObject";


export class UpdateDictRequestFiles extends $dara.Model {
  /**
   * @example
   * dic_0.dic
   */
  name?: string;
  ossObject?: UpdateDictRequestFilesOssObject;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ossObject: 'ossObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ossObject: UpdateDictRequestFilesOssObject,
    };
  }

  validate() {
    if(this.ossObject && typeof (this.ossObject as any).validate === 'function') {
      (this.ossObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

