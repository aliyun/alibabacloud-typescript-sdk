// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportHttpApiRequestSpecOssConfig extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * api-1
   */
  bucketName?: string;
  /**
   * @remarks
   * The full path of the file.
   * 
   * @example
   * /test/swagger.json
   */
  objectKey?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      objectKey: 'objectKey',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      objectKey: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

