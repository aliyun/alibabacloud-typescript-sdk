// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListK8sConfigMapsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c0830281-366c-41b6-80fb-542e76******
   */
  clusterId?: string;
  /**
   * @remarks
   * The filter conditions. Set this parameter to a JSON string in the format of {"field":"Name", "pattern":"configmap-"}.
   * 
   * @example
   * {"field":"Name", "pattern":"configmap-"}
   */
  condition?: { [key: string]: any };
  /**
   * @remarks
   * The namespace of the Kubernetes cluster.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from Page 0.
   * 
   * @example
   * 0
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to return a list of applications that use a ConfigMap. Valid values: true and false.
   * 
   * @example
   * true
   */
  showRelatedApps?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      condition: 'Condition',
      namespace: 'Namespace',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      showRelatedApps: 'ShowRelatedApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      condition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      namespace: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      showRelatedApps: 'boolean',
    };
  }

  validate() {
    if(this.condition) {
      $dara.Model.validateMap(this.condition);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

