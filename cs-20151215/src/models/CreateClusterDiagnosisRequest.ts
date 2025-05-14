// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterDiagnosisRequest extends $dara.Model {
  /**
   * @remarks
   * The parameter used to specify the diagnostic object. Examples of parameters for different types of diagnostic objects:
   * 
   * node:
   * 
   *     {"name": "cn-shanghai.10.10.10.107"}
   * 
   * pod
   * 
   *     {"namespace": "kube-system", "name": "csi-plugin-2cg9f"}
   * 
   * network
   * 
   *     {"src": "10.10.10.108", "dst": "10.11.247.16", "dport": "80"}
   * 
   * ingress
   * 
   *     {"url": "https://example.com"}
   * 
   * memory
   * 
   *     {"node":"cn-hangzhou.172.16.9.240"}
   * 
   * service
   * 
   *     {"namespace": "kube-system", "name": "nginx-ingress-lb"}
   * 
   * @example
   * {"namespace": "kube-system", "name": "csi-plugin-2cg9f"}
   */
  target?: { [key: string]: any };
  /**
   * @remarks
   * The type of the diagnostic.
   * 
   * Valid values:
   * 
   * *   node
   * *   ingress
   * *   cluster
   * *   memory
   * *   pod
   * *   service
   * *   network
   * 
   * @example
   * node
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      target: 'target',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.target) {
      $dara.Model.validateMap(this.target);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

