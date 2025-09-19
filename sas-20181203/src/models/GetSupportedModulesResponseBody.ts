// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupportedModulesResponseBodySupportedModuleResponseSupportedModules extends $dara.Model {
  /**
   * @remarks
   * The code of the module. Valid values:
   * 
   * *   **HOST**: host
   * *   **CSPM**: configuration assessment
   * *   **SIEM**: CloudSiem
   * *   **TRIAL**: log audit
   * 
   * @example
   * HOST
   */
  module?: string;
  /**
   * @remarks
   * The display name of the module.
   * 
   * @example
   * Configuration assessment
   */
  moduleDisp?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      moduleDisp: 'ModuleDisp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: 'string',
      moduleDisp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupportedModulesResponseBodySupportedModuleResponse extends $dara.Model {
  /**
   * @remarks
   * The modules supported by the cloud service provider.
   */
  supportedModules?: GetSupportedModulesResponseBodySupportedModuleResponseSupportedModules[];
  /**
   * @remarks
   * The cloud service provider. Valid values:
   * 
   * *   **Tencent**: Tencent Cloud
   * *   **HUAWEICLOUD**:Huawei Cloud
   * *   **Azure**: Microsoft Azure
   * *   **AWS**: Amazon Web Services (AWS)
   * 
   * @example
   * Tencent
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      supportedModules: 'SupportedModules',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedModules: { 'type': 'array', 'itemType': GetSupportedModulesResponseBodySupportedModuleResponseSupportedModules },
      vendor: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedModules)) {
      $dara.Model.validateArray(this.supportedModules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupportedModulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C699E4E4-F2F4-58FC-A949-457FFE59****
   */
  requestId?: string;
  /**
   * @remarks
   * The supported modules. The module information is classified by cloud service provider.
   */
  supportedModuleResponse?: GetSupportedModulesResponseBodySupportedModuleResponse[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportedModuleResponse: 'SupportedModuleResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportedModuleResponse: { 'type': 'array', 'itemType': GetSupportedModulesResponseBodySupportedModuleResponse },
    };
  }

  validate() {
    if(Array.isArray(this.supportedModuleResponse)) {
      $dara.Model.validateArray(this.supportedModuleResponse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

