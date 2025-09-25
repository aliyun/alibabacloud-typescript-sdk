// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceRAGConfigRequestConfigList extends $dara.Model {
  /**
   * @example
   * LLM_MODEL
   */
  name?: string;
  /**
   * @example
   * qwen-flash
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRAGConfigRequest extends $dara.Model {
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  configList?: ModifyInstanceRAGConfigRequestConfigList[];
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
      configList: 'ConfigList',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configList: { 'type': 'array', 'itemType': ModifyInstanceRAGConfigRequestConfigList },
      instanceName: 'string',
      regionId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.configList)) {
      $dara.Model.validateArray(this.configList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

