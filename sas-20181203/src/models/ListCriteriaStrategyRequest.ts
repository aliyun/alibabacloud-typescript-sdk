// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCriteriaStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of clusters.
   * 
   * @example
   * c4af4fdf38a98496a9b63c2be5dae****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * >  You can call the [GetOpaClusterImageList](~~GetOpaClusterImageList~~) operation to query the names of images.
   * 
   * @example
   * testImage
   */
  imageName?: string;
  /**
   * @remarks
   * The tag that is added to the container.
   * 
   * >  You can call the [GetOpaClusterLabelList](~~GetOpaClusterLabelList~~) operation to query the tags that are added to containers.
   * 
   * @example
   * testlabel
   */
  label?: string;
  /**
   * @remarks
   * The namespace of the cluster.
   * 
   * >  You can call the [GetOpaClusterNamespaceList](~~GetOpaClusterNamespaceList~~) operation to query the namespaces of clusters.
   * 
   * @example
   * test
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test
   */
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      imageName: 'ImageName',
      label: 'Label',
      namespace: 'Namespace',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      imageName: 'string',
      label: 'string',
      namespace: 'string',
      strategyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

