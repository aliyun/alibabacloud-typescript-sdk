// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigFileRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * /schemas/device_event_xt_schema.json
   */
  fileName?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URL of the file.
   * 
   * @example
   * oss://xxx/xxxx/xxx
   */
  ossPath?: string;
  /**
   * @remarks
   * The path of the parent directory.
   * 
   * @example
   * /
   */
  parentFullPath?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      ossPath: 'ossPath',
      parentFullPath: 'parentFullPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      ossPath: 'string',
      parentFullPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

