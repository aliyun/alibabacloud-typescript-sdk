// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigByNameRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The configuration name.
   * 
   * This parameter is required.
   * 
   * @example
   * 节点网络延时检测
   */
  configName?: string;
  /**
   * @remarks
   * The type of the configuration parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * attention
   */
  configType?: string;
  /**
   * @remarks
   * The entity ID. Default value: "default".
   * 
   * @example
   * i-bptest
   */
  entityId?: string;
  /**
   * @remarks
   * Specifies whether to use the global UID.
   * 
   * @example
   * false
   */
  useGlobalUid?: boolean;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * 1
   */
  versionId?: number;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      configName: 'configName',
      configType: 'configType',
      entityId: 'entityId',
      useGlobalUid: 'useGlobalUid',
      versionId: 'versionId',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      configName: 'string',
      configType: 'string',
      entityId: 'string',
      useGlobalUid: 'boolean',
      versionId: 'number',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

