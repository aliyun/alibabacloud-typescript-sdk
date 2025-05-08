// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPluginConfigResponseBodyDataGatewayConfigList } from "./GetPluginConfigResponseBodyDataGatewayConfigList";


export class GetPluginConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The category of the plug-in. Valid values:
   * 
   * 0: user-defined
   * 
   * 1: permission authentication
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
  configExample?: string;
  /**
   * @example
   * 5
   */
  domainConfigStartIndex?: number;
  /**
   * @remarks
   * The list of gateway plug-in configurations.
   */
  gatewayConfigList?: GetPluginConfigResponseBodyDataGatewayConfigList[];
  /**
   * @example
   * 7
   */
  gatewayConfigStartIndex?: number;
  /**
   * @remarks
   * The ID of the plug-in.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * name
   */
  imageName?: string;
  /**
   * @remarks
   * The mode.
   * 
   * @example
   * 0
   */
  mode?: number;
  /**
   * @remarks
   * The name of the plug-in.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The execution stage of the plug-in. Valid values:
   * 
   * 0: default stage
   * 
   * 1: authorization stage
   * 
   * 2: authentication stage
   * 
   * 3: statistics stage
   * 
   * @example
   * 0
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
   * The description of the README file.
   * 
   * @example
   * read me
   */
  readme?: string;
  /**
   * @remarks
   * The description of the README file that is edited in English.
   * 
   * @example
   * read me
   */
  readmeEn?: string;
  /**
   * @example
   * 0
   */
  routeConfigStartIndex?: number;
  /**
   * @remarks
   * Indicates whether the plug-in is enabled. Valid values:
   * 
   * 0: disabled
   * 
   * 1: enabled
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
   * The type.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The version of the plug-in.
   * 
   * @example
   * v1
   */
  version?: string;
  versionJson?: string;
  /**
   * @remarks
   * The WebAssembly language. Valid values:
   * 
   * 0: C++
   * 
   * 1: TinyGo
   * 
   * 2: Rust
   * 
   * 3: AssemblyScript
   * 
   * 4: Zig
   * 
   * @example
   * 0
   */
  wasmLang?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      configCheck: 'ConfigCheck',
      configExample: 'ConfigExample',
      domainConfigStartIndex: 'DomainConfigStartIndex',
      gatewayConfigList: 'GatewayConfigList',
      gatewayConfigStartIndex: 'GatewayConfigStartIndex',
      id: 'Id',
      imageName: 'ImageName',
      mode: 'Mode',
      name: 'Name',
      phase: 'Phase',
      primaryUser: 'PrimaryUser',
      priority: 'Priority',
      publishState: 'PublishState',
      readme: 'Readme',
      readmeEn: 'ReadmeEn',
      routeConfigStartIndex: 'RouteConfigStartIndex',
      status: 'Status',
      summary: 'Summary',
      summaryEn: 'SummaryEn',
      type: 'Type',
      version: 'Version',
      versionJson: 'VersionJson',
      wasmLang: 'WasmLang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      configCheck: 'string',
      configExample: 'string',
      domainConfigStartIndex: 'number',
      gatewayConfigList: { 'type': 'array', 'itemType': GetPluginConfigResponseBodyDataGatewayConfigList },
      gatewayConfigStartIndex: 'number',
      id: 'number',
      imageName: 'string',
      mode: 'number',
      name: 'string',
      phase: 'number',
      primaryUser: 'string',
      priority: 'number',
      publishState: 'number',
      readme: 'string',
      readmeEn: 'string',
      routeConfigStartIndex: 'number',
      status: 'string',
      summary: 'string',
      summaryEn: 'string',
      type: 'number',
      version: 'string',
      versionJson: 'string',
      wasmLang: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.gatewayConfigList)) {
      $dara.Model.validateArray(this.gatewayConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

