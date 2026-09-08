// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ParseSkillPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The OSS ETag returned after the file is uploaded to OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * 1D9920C4858A60B70705A8765A******
   */
  ossObjectETag?: string;
  /**
   * @remarks
   * The OSS path of the skill package.
   * 
   * This parameter is required.
   */
  ossObjectKey?: string;
  static names(): { [key: string]: string } {
    return {
      ossObjectETag: 'OssObjectETag',
      ossObjectKey: 'OssObjectKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossObjectETag: 'string',
      ossObjectKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

