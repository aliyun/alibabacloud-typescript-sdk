// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertK8sResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster. You can call the ListCluster operation to query the cluster ID. For more information, see [ListCluster](https://help.aliyun.com/document_detail/154995.html).
   * 
   * This parameter is required.
   * 
   * @example
   * b07c8192-****-adf4f7447720
   */
  clusterId?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * deployment-to-convert
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource that is used. Set the value to deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * deployment
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      namespace: 'Namespace',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      namespace: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

