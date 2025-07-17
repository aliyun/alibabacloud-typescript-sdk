// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvironmentKubeResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The environment ID.
   * 
   * This parameter is required.
   * 
   * @example
   * env-xxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The resource type. Valid values: Pod, Deployment, and Service.
   * 
   * This parameter is required.
   * 
   * @example
   * Pod
   */
  kind?: string;
  /**
   * @remarks
   * The tags.
   */
  labelSelectors?: { [key: string]: string };
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'EnvironmentId',
      kind: 'Kind',
      labelSelectors: 'LabelSelectors',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      kind: 'string',
      labelSelectors: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      namespace: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.labelSelectors) {
      $dara.Model.validateMap(this.labelSelectors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

