// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterKubeConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c8f0377146d104687ac562eef9403****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster certificate.
   * 
   * @example
   * apiVersion: v1
   * clusters:
   * - cluster:
   *     certificate-authority-data:***
   *     server: https://****:6443
   *   name: kubernetes
   * contexts:
   * - context:
   *     cluster: kubernetes
   *     user: "2580306074811*****"
   *   name: 258*******
   * kind: Config
   * users:
   * - name: "2580306074811*****"
   *   user:
   *     client-certificate-data:***
   *     client-key-data: ***
   */
  kubeconfig?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      kubeconfig: 'Kubeconfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      kubeconfig: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

