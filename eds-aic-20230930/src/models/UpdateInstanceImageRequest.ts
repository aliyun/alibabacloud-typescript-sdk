// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceImageRequest extends $dara.Model {
  ignoreParamValidation?: boolean;
  /**
   * @remarks
   * The ID of the image. Call [](t2730769.xdita#)to query the list of images for cloud phones.
   * 
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  /**
   * @remarks
   * The list of instances.
   */
  instanceIdList?: string[];
  /**
   * @remarks
   * Specifies whether to reset the instance. If you reset the instance, all user data on the instance is cleared.
   * 
   * @example
   * false
   */
  reset?: boolean;
  static names(): { [key: string]: string } {
    return {
      ignoreParamValidation: 'IgnoreParamValidation',
      imageId: 'ImageId',
      instanceIdList: 'InstanceIdList',
      reset: 'Reset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreParamValidation: 'boolean',
      imageId: 'string',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      reset: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

