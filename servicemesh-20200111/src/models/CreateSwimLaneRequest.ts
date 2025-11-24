// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSwimLaneRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the lane group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The label key of the associated service workload. Set the value to `ASM_TRAFFIC_TAG`.
   * 
   * @example
   * ASM_TRAFFIC_TAG
   */
  labelSelectorKey?: string;
  /**
   * @remarks
   * The label value of the associated service workload.``
   * 
   * @example
   * v3
   */
  labelSelectorValue?: string;
  /**
   * @remarks
   * The ID of the Service Mesh (ASM) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * *****
   */
  serviceMeshId?: string;
  /**
   * @remarks
   * The list of services associated with the lane. The value is a JSON array. The format of a single service is `$Cluster name/$Cluster ID/$Namespace/$Service name`.
   * 
   * @example
   * [\\"sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mocka\\",\\"sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockb\\",\\"sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockc\\"]
   */
  servicesList?: string;
  /**
   * @remarks
   * The name of the lane.
   * 
   * @example
   * s3
   */
  swimLaneName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      labelSelectorKey: 'LabelSelectorKey',
      labelSelectorValue: 'LabelSelectorValue',
      serviceMeshId: 'ServiceMeshId',
      servicesList: 'ServicesList',
      swimLaneName: 'SwimLaneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      labelSelectorKey: 'string',
      labelSelectorValue: 'string',
      serviceMeshId: 'string',
      servicesList: 'string',
      swimLaneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

