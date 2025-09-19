// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInterceptionTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the network object belongs.
   * 
   * @example
   * frontend
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc20a1024011c44b6a8710d6f8b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * sas-test-cnnf
   */
  clusterName?: string;
  /**
   * @remarks
   * An array that consists of the images of the network object.
   */
  imageList?: string[];
  /**
   * @remarks
   * The namespace to which the network object belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * An array that consists of the labels specified for the network object.
   */
  tagList?: string[];
  /**
   * @remarks
   * The name of the object to be blocked.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  targetName?: string;
  /**
   * @remarks
   * The object type. Valid value:
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
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      imageList: 'ImageList',
      namespace: 'Namespace',
      tagList: 'TagList',
      targetName: 'TargetName',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      clusterName: 'string',
      imageList: { 'type': 'array', 'itemType': 'string' },
      namespace: 'string',
      tagList: { 'type': 'array', 'itemType': 'string' },
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

