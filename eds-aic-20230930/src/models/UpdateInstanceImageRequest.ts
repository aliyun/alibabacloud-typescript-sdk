// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceImageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to skip parameter validation. A value of true indicates that validation is skipped. A value of false or an empty value indicates that validation is performed.
   */
  ignoreParamValidation?: boolean;
  /**
   * @remarks
   * The image ID. You can call the [DescribeImageList](https://help.aliyun.com/document_detail/2807324.html) operation to query the image list of cloud phones.
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
   * Specifies whether to reset the instance. A reset clears all user data on the instance.
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

