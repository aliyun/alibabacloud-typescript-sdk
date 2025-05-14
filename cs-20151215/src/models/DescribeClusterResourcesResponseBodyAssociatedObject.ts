// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterResourcesResponseBodyAssociatedObject extends $dara.Model {
  /**
   * @remarks
   * The Kubernetes object type.
   * 
   * @example
   * Service
   */
  kind?: string;
  /**
   * @remarks
   * The namespace in which the Kubernetes object resides.
   * 
   * @example
   * kube-system
   */
  namespace?: string;
  /**
   * @remarks
   * The Kubernetes object name.
   * 
   * @example
   * nginx-ingress-lb
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      kind: 'kind',
      namespace: 'namespace',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kind: 'string',
      namespace: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

