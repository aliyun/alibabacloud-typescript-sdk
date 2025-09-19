// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerServiceK8sClusterNamespacesResponseBodyK8sClusterNamespaces extends $dara.Model {
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerServiceK8sClusterNamespacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The namespaces.
   */
  k8sClusterNamespaces?: DescribeContainerServiceK8sClusterNamespacesResponseBodyK8sClusterNamespaces[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C8487EF-50C2-54BB-8634-10F8C35D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      k8sClusterNamespaces: 'K8sClusterNamespaces',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sClusterNamespaces: { 'type': 'array', 'itemType': DescribeContainerServiceK8sClusterNamespacesResponseBodyK8sClusterNamespaces },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.k8sClusterNamespaces)) {
      $dara.Model.validateArray(this.k8sClusterNamespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

