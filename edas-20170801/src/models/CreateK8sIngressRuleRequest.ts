// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateK8sIngressRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The annotations.
   * 
   * @example
   * {\\"alb.ingress.kubernetes.io/rewrite-target\\":\\"/consumer-echo/test\\"}
   */
  annotations?: string;
  /**
   * @remarks
   * The ID of the Kubernetes cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 5b2b4ab4-efbc-4a81-9c45-xxxxxxxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The routing rules of the Ingress. Set this parameter to a JSON string in the following format:
   * 
   *     {
   *       "rules": [
   *         {
   *           "host": "abc.com",
   *           "secretName": "tls-secret",
   *           "paths": [
   *             {
   *               "path": "/path",
   *               "backend": {
   *                 "servicePort": 80,
   *                 "serviceName": "xxx"
   *               }
   *             }
   *           ]
   *         }
   *       ]
   *     }
   * 
   * Parameter description:
   * 
   * *   rules: the list of routing rules.
   * *   host: the domain name to be accessed.
   * *   secretName: the name of the Secret that stores the information about the Transport Layer Security (TLS) certificate. The certificate is required if you need to use the HTTPS protocol.
   * *   paths: the list of paths to be accessed.
   * *   path: the path to be accessed.
   * *   backend: the configuration of the backend service. You can specify a service that is created in the Enterprise Distributed Application Service (EDAS) console.
   * *   serviceName: the name of the backend service.
   * *   servicePort: the port of the backend service.
   * 
   * @example
   * {"rules":[{"host":"abc.com","secretName":"tls-secret","paths":[{"path":"/path","backend":{"servicePort":80,"serviceName":"xxx"}}]}]}
   */
  ingressConf?: { [key: string]: any };
  /**
   * @remarks
   * The labels.
   * 
   * @example
   * {\\"test-labels\\":\\"test-value\\"}
   */
  labels?: string;
  /**
   * @remarks
   * The name of the Ingress. The name can contain lowercase letters, digits, and hyphens (-). It must start with a lowercase letter but cannot end with a hyphen (-). The name can be up to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * my-ingress-rule
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the Kubernetes cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      clusterId: 'ClusterId',
      ingressConf: 'IngressConf',
      labels: 'Labels',
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      clusterId: 'string',
      ingressConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: 'string',
      name: 'string',
      namespace: 'string',
    };
  }

  validate() {
    if(this.ingressConf) {
      $dara.Model.validateMap(this.ingressConf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

