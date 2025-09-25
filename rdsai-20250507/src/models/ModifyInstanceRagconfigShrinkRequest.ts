// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceRAGConfigShrinkRequest extends $dara.Model {
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  configListShrink?: string;
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
  /**
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configListShrink: 'ConfigList',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configListShrink: 'string',
      instanceName: 'string',
      regionId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

