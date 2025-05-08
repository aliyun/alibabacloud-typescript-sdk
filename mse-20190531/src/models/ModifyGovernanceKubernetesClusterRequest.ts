// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyGovernanceKubernetesClusterRequestNamespaceInfos } from "./ModifyGovernanceKubernetesClusterRequestNamespaceInfos";


export class ModifyGovernanceKubernetesClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cd23228b3c80c4d4f9ad87cc3****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the namespace for which Microservices Engine(MSE) Microservices Governance is enabled.
   */
  namespaceInfos?: ModifyGovernanceKubernetesClusterRequestNamespaceInfos[];
  /**
   * @remarks
   * The ID of the region in which the instance resides. The region is supported by MSE.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      namespaceInfos: 'NamespaceInfos',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      namespaceInfos: { 'type': 'array', 'itemType': ModifyGovernanceKubernetesClusterRequestNamespaceInfos },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.namespaceInfos)) {
      $dara.Model.validateArray(this.namespaceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

