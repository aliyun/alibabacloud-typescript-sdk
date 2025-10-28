// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateK8sResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * 2e7059e9-2d********5e8ecac64ff
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the namespace to which the Kubernetes resource belongs.
   * 
   * @example
   * app-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The description of the resource in the YAML format.
   * 
   * @example
   * apiVersion: apps/v1 kind: Deployment metadata:   name: demo-app   namespace: app-namespace spec:   replicas: 3   selector:     matchLabels:       cluster: abc   template: # create pods using pod definition in this template     metadata:       labels:         cluster: abc     spec:       containers:       - image: registry-vpc.cn-hangzhou.aliyuncs.com/edas-demo-image/consumer:1.0         imagePullPolicy: Always         name: test-container         ports:         - containerPort: 80         env:         - name: foo           value: bar
   */
  resourceContent?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      namespace: 'Namespace',
      resourceContent: 'ResourceContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      namespace: 'string',
      resourceContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

