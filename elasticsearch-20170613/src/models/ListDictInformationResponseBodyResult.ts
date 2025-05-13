// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDictInformationResponseBodyResultOssObject } from "./ListDictInformationResponseBodyResultOssObject";


export class ListDictInformationResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2202301
   */
  fileSize?: number;
  ossObject?: ListDictInformationResponseBodyResultOssObject;
  /**
   * @example
   * STOP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      ossObject: 'ossObject',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      ossObject: ListDictInformationResponseBodyResultOssObject,
      type: 'string',
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

