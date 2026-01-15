// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncreaseInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket.
   * 
   * >  The bucket must be in the same region as the Image Search instance.
   * 
   * This parameter is required.
   * 
   * @example
   * bucketName
   */
  bucketName?: string;
  /**
   * @remarks
   * The callback address.
   * 
   * @example
   * http://xxxxx
   */
  callbackAddress?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * imagesearchName
   */
  instanceName?: string;
  /**
   * @remarks
   * The absolute path to the increment.meta file in the bucket. The path must start with a forward slash (/) and cannot end with a forward slash (/).
   * 
   * This parameter is required.
   * 
   * @example
   * /xxx/xxx
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      callbackAddress: 'CallbackAddress',
      instanceName: 'InstanceName',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      callbackAddress: 'string',
      instanceName: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

