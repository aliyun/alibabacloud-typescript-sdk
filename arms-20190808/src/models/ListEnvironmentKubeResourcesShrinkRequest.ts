// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvironmentKubeResourcesShrinkRequest extends $dara.Model {
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
  labelSelectorsShrink?: string;
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
      labelSelectorsShrink: 'LabelSelectors',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      kind: 'string',
      labelSelectorsShrink: 'string',
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

