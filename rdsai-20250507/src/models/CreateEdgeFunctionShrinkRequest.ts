// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeFunctionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The code parameters.
   */
  codeShrink?: string;
  /**
   * @remarks
   * The configuration parameters of the edge function.
   */
  customConfigShrink?: string;
  /**
   * @remarks
   * The name of the function.
   * 
   * @example
   * ef-*****
   */
  edgeFunctionName?: string;
  /**
   * @remarks
   * The environment variables.
   */
  envsShrink?: string;
  /**
   * @remarks
   * The ID of the RDS Supabase instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
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

