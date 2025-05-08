// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGovernanceKubernetesClusterShrinkRequest extends $dara.Model {
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
  namespaceInfosShrink?: string;
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
      namespaceInfosShrink: 'NamespaceInfos',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      namespaceInfosShrink: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

