// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModuleConfigStatusResponseBodyDataModuleConfigResults extends $dara.Model {
  /**
   * @remarks
   * The name of the check item. Valid values:
   * 
   * *   **Ransom**: The anti-ransomware policy is enabled.
   * *   **WebLock**: The web tamper proofing feature is enabled.
   * *   **Rasp**: Applications are added to the application protection feature.
   * *   **Image**: The container images that can be scanned are specified.
   * *   **Virus**: The periodic virus scan policy is enabled.
   * 
   * @example
   * Ransom
   */
  moduleName?: string;
  /**
   * @remarks
   * Indicates whether the service module passed the status check. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  pass?: boolean;
  static names(): { [key: string]: string } {
    return {
      moduleName: 'ModuleName',
      pass: 'Pass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleName: 'string',
      pass: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleConfigStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The check results of the service modules.
   */
  moduleConfigResults?: GetModuleConfigStatusResponseBodyDataModuleConfigResults[];
  static names(): { [key: string]: string } {
    return {
      moduleConfigResults: 'ModuleConfigResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleConfigResults: { 'type': 'array', 'itemType': GetModuleConfigStatusResponseBodyDataModuleConfigResults },
    };
  }

  validate() {
    if(Array.isArray(this.moduleConfigResults)) {
      $dara.Model.validateArray(this.moduleConfigResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleConfigStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetModuleConfigStatusResponseBodyData;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 843E4805-****-7EE12FA8DBFD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetModuleConfigStatusResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

