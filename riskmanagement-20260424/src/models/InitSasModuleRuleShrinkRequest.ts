// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitSasModuleRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic binding. Valid values:
   * 
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 0
   */
  autoBind?: number;
  /**
   * @remarks
   * The list of instances.
   */
  instancesShrink?: string;
  /**
   * @remarks
   * Specifies whether to use the trial version.
   * 
   * @example
   * false
   */
  isTrial?: boolean;
  /**
   * @remarks
   * The region ID of the access control instance.
   * 
   * @example
   * cn-guangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoBind: 'AutoBind',
      instancesShrink: 'Instances',
      isTrial: 'IsTrial',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBind: 'number',
      instancesShrink: 'string',
      isTrial: 'boolean',
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

