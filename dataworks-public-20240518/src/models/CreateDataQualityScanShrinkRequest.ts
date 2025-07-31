// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityScanShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a-customized-uuid
   */
  clientToken?: string;
  computeResourceShrink?: string;
  description?: string;
  hooksShrink?: string;
  /**
   * @example
   * data_quality_scan_001
   */
  name?: string;
  /**
   * @example
   * 95279527****
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
      clientToken: 'ClientToken',
      computeResourceShrink: 'ComputeResource',
      description: 'Description',
      hooksShrink: 'Hooks',
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
      clientToken: 'string',
      computeResourceShrink: 'string',
      description: 'string',
      hooksShrink: 'string',
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

