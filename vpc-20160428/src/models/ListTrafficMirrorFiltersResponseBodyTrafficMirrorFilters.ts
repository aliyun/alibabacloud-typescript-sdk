// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersEgressRules } from "./ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersEgressRules";
import { ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersIngressRules } from "./ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersIngressRules";
import { ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersTags } from "./ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersTags";


export class ListTrafficMirrorFiltersResponseBodyTrafficMirrorFilters extends $dara.Model {
  /**
   * @remarks
   * The time when the filter is created.
   * 
   * @example
   * 2023-09-05T15:26Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The information about the outbound rules.
   */
  egressRules?: ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersEgressRules[];
  /**
   * @remarks
   * The information about the inbound rules.
   */
  ingressRules?: ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersIngressRules[];
  /**
   * @remarks
   * The ID of the resource group to which the traffic mirror session belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersTags[];
  /**
   * @remarks
   * The description of the filter.
   * 
   * @example
   * This is a filter.
   */
  trafficMirrorFilterDescription?: string;
  /**
   * @remarks
   * The ID of the filter.
   * 
   * @example
   * tmf-j6cmls82xnc86vtpe****
   */
  trafficMirrorFilterId?: string;
  /**
   * @remarks
   * The filter name.
   * 
   * @example
   * abc
   */
  trafficMirrorFilterName?: string;
  /**
   * @remarks
   * The status of the filter. Valid values:
   * 
   * *   **Creating**
   * *   **Created**
   * *   **Modifying**
   * *   **Deleting**
   * 
   * @example
   * Created
   */
  trafficMirrorFilterStatus?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      egressRules: 'EgressRules',
      ingressRules: 'IngressRules',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      trafficMirrorFilterDescription: 'TrafficMirrorFilterDescription',
      trafficMirrorFilterId: 'TrafficMirrorFilterId',
      trafficMirrorFilterName: 'TrafficMirrorFilterName',
      trafficMirrorFilterStatus: 'TrafficMirrorFilterStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      egressRules: { 'type': 'array', 'itemType': ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersEgressRules },
      ingressRules: { 'type': 'array', 'itemType': ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersIngressRules },
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersTags },
      trafficMirrorFilterDescription: 'string',
      trafficMirrorFilterId: 'string',
      trafficMirrorFilterName: 'string',
      trafficMirrorFilterStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.egressRules)) {
      $dara.Model.validateArray(this.egressRules);
    }
    if(Array.isArray(this.ingressRules)) {
      $dara.Model.validateArray(this.ingressRules);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

