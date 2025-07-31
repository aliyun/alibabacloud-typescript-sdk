// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataQualityScanShrinkRequest extends $dara.Model {
  computeResourceShrink?: string;
  description?: string;
  hooksShrink?: string;
  /**
   * @example
   * 10001
   */
  id?: number;
  /**
   * @example
   * data_quality_scan_001
   */
  name?: string;
  /**
   * @example
   * 231263586109857423
   */
  owner?: string;
  parametersShrink?: string;
  /**
   * @example
   * 101
   */
  projectId?: number;
  runtimeResourceShrink?: string;
  spec?: string;
  triggerShrink?: string;
  static names(): { [key: string]: string } {
    return {
      computeResourceShrink: 'ComputeResource',
      description: 'Description',
      hooksShrink: 'Hooks',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      parametersShrink: 'Parameters',
      projectId: 'ProjectId',
      runtimeResourceShrink: 'RuntimeResource',
      spec: 'Spec',
      triggerShrink: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResourceShrink: 'string',
      description: 'string',
      hooksShrink: 'string',
      id: 'number',
      name: 'string',
      owner: 'string',
      parametersShrink: 'string',
      projectId: 'number',
      runtimeResourceShrink: 'string',
      spec: 'string',
      triggerShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

