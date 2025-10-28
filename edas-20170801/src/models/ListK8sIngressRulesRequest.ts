// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListK8sIngressRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * 5b2b4ab4-efbc-4a81-9c45-xxxxxxxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The filter conditions. Set the value to a JSON string in the format of {"field":"Name", "pattern":"my-"}, where:
   * 
   * *   field: the parameter to be matched. Valid values: Name and ClusterName.
   * *   pattern: the content to be matched.
   * 
   * For example, a value of {"field":"Name", "pattern":"my-"} indicates that the specified filter conditions match the routing rules whose names start with my-.
   * 
   * @example
   * {"field":"Name", "pattern":"my-"}
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
   * The ID of the region where the cluster resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      condition: 'Condition',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      condition: 'string',
      namespace: 'string',
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

