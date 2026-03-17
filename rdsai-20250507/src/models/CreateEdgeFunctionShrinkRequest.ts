// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeFunctionShrinkRequest extends $dara.Model {
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  codeShrink?: string;
  customConfigShrink?: string;
  /**
   * @example
   * ef-*****
   */
  edgeFunctionName?: string;
  envsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      codeShrink: 'Code',
      customConfigShrink: 'CustomConfig',
      edgeFunctionName: 'EdgeFunctionName',
      envsShrink: 'Envs',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      codeShrink: 'string',
      customConfigShrink: 'string',
      edgeFunctionName: 'string',
      envsShrink: 'string',
      instanceName: 'string',
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

