// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigByNameRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration name.
   * 
   * This parameter is required.
   * 
   * @example
   * Node network latency detection
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
   * Specifies whether to use a global UID.
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
  static names(): { [key: string]: string } {
    return {
      configName: 'configName',
      configType: 'configType',
      entityId: 'entityId',
      useGlobalUid: 'useGlobalUid',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      configType: 'string',
      entityId: 'string',
      useGlobalUid: 'boolean',
      versionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

