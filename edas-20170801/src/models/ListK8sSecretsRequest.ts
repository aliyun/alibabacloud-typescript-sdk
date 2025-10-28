// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListK8sSecretsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * 7a953f9a-2946-4c7a-9d82-9939db******
   */
  clusterId?: string;
  /**
   * @remarks
   * The filter conditions. Set this parameter to a JSON string in the format of {"field":"Name", "pattern":"configmap-"}.
   * 
   * @example
   * {\\"field\\":\\"Name\\",\\"pattern\\":\\"product\\"}
   */
  condition?: string;
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
   * The number of entries to return on each page. The value 0 indicates that all entries are returned on one page.
   * 
   * @example
   * 10
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
   * Specifies whether to return a list of applications that use a Secret.
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
      condition: 'string',
      namespace: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      showRelatedApps: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

