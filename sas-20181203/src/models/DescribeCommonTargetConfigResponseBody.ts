// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonTargetConfigResponseBodyTargetList extends $dara.Model {
  /**
   * @remarks
   * The mode in which the configuration takes effect. Valid values:
   * 
   * *   **add**: In this mode, the configuration takes effect on the assets.
   * *   **del**: In this mode, the configuration does not take effect on the assets.
   * 
   * @example
   * add
   */
  flag?: string;
  /**
   * @remarks
   * The ID of the asset on which the configuration takes effect.
   * 
   * > 
   * 
   * *   When you set the **TargetType** parameter to **uuid**, the value of this parameter indicates the UUID of an asset.
   * 
   * *   When you set the **TargetType** parameter to **Cluster**, the value of this parameter indicates the ID of a cluster.
   * 
   * *   When you set the **TargetType** parameter to **image_repo**, the value of this parameter indicates the ID of an image repository.
   * 
   * @example
   * c23551de6149343e8a54e69fbefe6****
   */
  target?: string;
  /**
   * @remarks
   * The dimension from on which the feature was configured. Valid values:
   * 
   * *   **uuid**: the UUID of the asset
   * *   **Cluster**: the ID of the cluster
   * *   **image_repo**: the ID of the image repository
   * 
   * @example
   * image_repo
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      flag: 'Flag',
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flag: 'string',
      target: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonTargetConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 09969D2C-4FAD-429E-BFBF-9A60DEF8BF6F
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the details of the configuration items.
   */
  targetList?: DescribeCommonTargetConfigResponseBodyTargetList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      targetList: 'TargetList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      targetList: { 'type': 'array', 'itemType': DescribeCommonTargetConfigResponseBodyTargetList },
    };
  }

  validate() {
    if(Array.isArray(this.targetList)) {
      $dara.Model.validateArray(this.targetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

