// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiApiInfoIngressInfoEnvironmentInfo } from "./HttpApiApiInfoIngressInfoEnvironmentInfo";
import { HttpApiApiInfoIngressInfoK8sClusterInfo } from "./HttpApiApiInfoIngressInfoK8sClusterInfo";


export class HttpApiApiInfoIngressInfo extends $dara.Model {
  environmentInfo?: HttpApiApiInfoIngressInfoEnvironmentInfo;
  ingressClass?: string;
  k8sClusterInfo?: HttpApiApiInfoIngressInfoK8sClusterInfo;
  overrideIngressIp?: boolean;
  sourceId?: string;
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      environmentInfo: 'environmentInfo',
      ingressClass: 'ingressClass',
      k8sClusterInfo: 'k8sClusterInfo',
      overrideIngressIp: 'overrideIngressIp',
      sourceId: 'sourceId',
      watchNamespace: 'watchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentInfo: HttpApiApiInfoIngressInfoEnvironmentInfo,
      ingressClass: 'string',
      k8sClusterInfo: HttpApiApiInfoIngressInfoK8sClusterInfo,
      overrideIngressIp: 'boolean',
      sourceId: 'string',
      watchNamespace: 'string',
    };
  }

  validate() {
    if(this.environmentInfo && typeof (this.environmentInfo as any).validate === 'function') {
      (this.environmentInfo as any).validate();
    }
    if(this.k8sClusterInfo && typeof (this.k8sClusterInfo as any).validate === 'function') {
      (this.k8sClusterInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

