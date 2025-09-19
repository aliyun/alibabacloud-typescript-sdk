// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInterceptionTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * > You can call the [DescribeContainerTags](~~DescribeContainerTags~~) operation to obtain the value of this parameter.
   * 
   * @example
   * yasintt-daemonst
   */
  appName?: string;
  /**
   * @remarks
   * An array that consists of images.
   * 
   * > You can call the [DescribeContainerTags](~~DescribeContainerTags~~) operation to obtain the value of this parameter.
   */
  imageList?: string[];
  /**
   * @remarks
   * The namespace.
   * 
   * > You can call the [DescribeContainerTags](~~DescribeContainerTags~~) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * demo4
   */
  namespace?: string;
  /**
   * @remarks
   * An array that consists of tags.
   * 
   * > You can call the [DescribeContainerTags](~~DescribeContainerTags~~) operation to obtain the value of this parameter.
   */
  tagList?: string[];
  /**
   * @remarks
   * The ID of the network object.
   * 
   * > You can call the [ListInterceptionTargetPage](~~ListInterceptionTargetPage~~) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 400913
   */
  targetId?: number;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * test001
   */
  targetName?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * 
   * *   **IMAGE**
   * 
   * This parameter is required.
   * 
   * @example
   * IMAGE
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      imageList: 'ImageList',
      namespace: 'Namespace',
      tagList: 'TagList',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      imageList: { 'type': 'array', 'itemType': 'string' },
      namespace: 'string',
      tagList: { 'type': 'array', 'itemType': 'string' },
      targetId: 'number',
      targetName: 'string',
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageList)) {
      $dara.Model.validateArray(this.imageList);
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

