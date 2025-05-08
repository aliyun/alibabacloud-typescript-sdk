// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPluginsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of the plug-in. Valid values:
   * 
   * 0: custom
   * 
   * 1: permission authorization
   * 
   * 2: security protection
   * 
   * 3: transmission protocol
   * 
   * 4: traffic control
   * 
   * 5: traffic observation
   * 
   * @example
   * 0
   */
  category?: number;
  /**
   * @remarks
   * The information about the plug-in configuration used for checking.
   * 
   * @example
   * \\# The configuration includes the fields required for checking, such as name, age, and friends. Sample configuration: name: John age: 18 friends: - David - Anne
   */
  configCheck?: string;
  /**
   * @remarks
   * The ID of the plug-in.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1.0.0
   */
  maxVersion?: string;
  /**
   * @example
   * 0
   */
  mode?: number;
  /**
   * @remarks
   * The name of the plug-in.
   * 
   * @example
   * key-auth
   */
  name?: string;
  /**
   * @example
   * false
   */
  newVersionPublishingFlag?: boolean;
  /**
   * @remarks
   * The execution stage of the plug-in.
   * 
   * *   0: default stage
   * *   1: authorization stage
   * *   2: authentication stage
   * *   3: statistics stage
   * 
   * @example
   * 1
   */
  phase?: number;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 123
   */
  primaryUser?: string;
  /**
   * @remarks
   * The execution priority of the plug-in. A larger value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The publish status.
   * 
   * @example
   * 1
   */
  publishState?: number;
  /**
   * @remarks
   * Indicates whether the plug-in is enabled.
   * 
   * *   0: disabled
   * *   1: enabled
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The summary of the plug-in.
   * 
   * @example
   * This is a plug-in.
   */
  summary?: string;
  summaryEn?: string;
  /**
   * @remarks
   * The version of the plug-in.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The URL of the Object Storage Service (OSS) bucket that stores the WebAssembly plug-in.
   */
  wasmFile?: string;
  /**
   * @remarks
   * The WebAssembly language. Valid values:
   * 
   * *   0: C++
   * *   1: TinyGo
   * *   2: Rust
   * *   3: AssemblyScript
   * *   4: Zig
   * 
   * @example
   * 0
   */
  wasmLang?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      configCheck: 'ConfigCheck',
      id: 'Id',
      maxVersion: 'MaxVersion',
      mode: 'Mode',
      name: 'Name',
      newVersionPublishingFlag: 'NewVersionPublishingFlag',
      phase: 'Phase',
      primaryUser: 'PrimaryUser',
      priority: 'Priority',
      publishState: 'PublishState',
      status: 'Status',
      summary: 'Summary',
      summaryEn: 'SummaryEn',
      version: 'Version',
      wasmFile: 'WasmFile',
      wasmLang: 'WasmLang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      configCheck: 'string',
      id: 'number',
      maxVersion: 'string',
      mode: 'number',
      name: 'string',
      newVersionPublishingFlag: 'boolean',
      phase: 'number',
      primaryUser: 'string',
      priority: 'number',
      publishState: 'number',
      status: 'string',
      summary: 'string',
      summaryEn: 'string',
      version: 'string',
      wasmFile: 'string',
      wasmLang: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

