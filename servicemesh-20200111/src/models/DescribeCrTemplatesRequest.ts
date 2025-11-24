// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The version of Istio used by the ASM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * v1.9.7.31-g24cdcb43-aliyun
   */
  istioVersion?: string;
  /**
   * @remarks
   * The type of Istio resource whose common YAML templates you want to query. Valid values:
   * 
   * *   AuthorizationPolicy
   * *   RequestAuthentication
   * *   PeerAuthentication
   * *   WorkloadGroup
   * *   WorkloadEntry
   * *   Sidecar
   * *   EnvoyFilter
   * *   ServiceEntry
   * *   Gateway
   * *   DestinationRule
   * *   VirtualService
   * 
   * This parameter is required.
   * 
   * @example
   * VirtualService
   */
  kind?: string;
  static names(): { [key: string]: string } {
    return {
      istioVersion: 'IstioVersion',
      kind: 'Kind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      istioVersion: 'string',
      kind: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

