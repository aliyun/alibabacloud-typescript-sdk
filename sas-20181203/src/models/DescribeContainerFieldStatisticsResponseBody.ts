// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerFieldStatisticsResponseBodyContainerGroupedFields extends $dara.Model {
  /**
   * @remarks
   * The number of applications.
   * 
   * @example
   * 3
   */
  appCount?: number;
  /**
   * @remarks
   * The number of clusters.
   * 
   * @example
   * 1
   */
  clusterCount?: number;
  /**
   * @remarks
   * The number of containers.
   * 
   * @example
   * 1
   */
  containerCount?: number;
  /**
   * @remarks
   * The number of images.
   * 
   * @example
   * 3
   */
  imageCount?: number;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @remarks
   * The number of namespaces.
   * 
   * @example
   * 3
   */
  namespaceCount?: number;
  /**
   * @remarks
   * The number of pods.
   * 
   * @example
   * 1
   */
  podCount?: number;
  /**
   * @remarks
   * The number of the applications on which risks are detected.
   * 
   * @example
   * 1
   */
  riskAppCount?: number;
  /**
   * @remarks
   * The number of the clusters on which risks are detected.
   * 
   * @example
   * 1
   */
  riskClusterCount?: number;
  /**
   * @remarks
   * The number of the containers on which risks are detected.
   * 
   * @example
   * 1
   */
  riskContainerCount?: number;
  /**
   * @remarks
   * The number of the images on which risks are detected.
   * 
   * @example
   * 1
   */
  riskImageCount?: number;
  /**
   * @remarks
   * The number of the instances on which risks are detected.
   * 
   * @example
   * 3
   */
  riskInstanceCount?: number;
  /**
   * @remarks
   * The number of the pods on which risks are detected.
   * 
   * @example
   * 2
   */
  riskPodCount?: number;
  static names(): { [key: string]: string } {
    return {
      appCount: 'AppCount',
      clusterCount: 'ClusterCount',
      containerCount: 'ContainerCount',
      imageCount: 'ImageCount',
      instanceCount: 'InstanceCount',
      namespaceCount: 'NamespaceCount',
      podCount: 'PodCount',
      riskAppCount: 'RiskAppCount',
      riskClusterCount: 'RiskClusterCount',
      riskContainerCount: 'RiskContainerCount',
      riskImageCount: 'RiskImageCount',
      riskInstanceCount: 'RiskInstanceCount',
      riskPodCount: 'RiskPodCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCount: 'number',
      clusterCount: 'number',
      containerCount: 'number',
      imageCount: 'number',
      instanceCount: 'number',
      namespaceCount: 'number',
      podCount: 'number',
      riskAppCount: 'number',
      riskClusterCount: 'number',
      riskContainerCount: 'number',
      riskImageCount: 'number',
      riskInstanceCount: 'number',
      riskPodCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerFieldStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistical information about containers.
   */
  containerGroupedFields?: DescribeContainerFieldStatisticsResponseBodyContainerGroupedFields;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      containerGroupedFields: 'ContainerGroupedFields',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupedFields: DescribeContainerFieldStatisticsResponseBodyContainerGroupedFields,
      requestId: 'string',
    };
  }

  validate() {
    if(this.containerGroupedFields && typeof (this.containerGroupedFields as any).validate === 'function') {
      (this.containerGroupedFields as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

