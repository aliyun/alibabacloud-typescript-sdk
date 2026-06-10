// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentResponseBodyDataVersions extends $dara.Model {
  /**
   * @remarks
   * Creation Time of the Agent version
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  createdAt?: string;
  /**
   * @remarks
   * Installation script for this version of the Agent
   * 
   * @example
   * sysom.sh install
   */
  installScript?: string;
  /**
   * @remarks
   * Uninstall script for this Agent version
   * 
   * @example
   * sysom.sh uninstall
   */
  uninstallScript?: string;
  /**
   * @remarks
   * Update Time of the Agent version
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  updatedAt?: string;
  /**
   * @remarks
   * Upgrade script for this Agent version
   * 
   * @example
   * sysom.sh upgrade
   */
  upgradeScript?: string;
  /**
   * @remarks
   * Version number of the Agent
   * 
   * @example
   * 3.4.0-1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      installScript: 'install_script',
      uninstallScript: 'uninstall_script',
      updatedAt: 'updated_at',
      upgradeScript: 'upgrade_script',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      installScript: 'string',
      uninstallScript: 'string',
      updatedAt: 'string',
      upgradeScript: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation Time of the widget
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  createdAt?: string;
  /**
   * @remarks
   * Description of the widget
   * 
   * @example
   * SysOM Agent
   */
  description?: string;
  /**
   * @remarks
   * Widget ID
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  id?: string;
  /**
   * @remarks
   * Name of the widget
   * 
   * @example
   * SysOM
   */
  name?: string;
  /**
   * @remarks
   * Supported architecture
   * 
   * @example
   * x86
   */
  supportArch?: string;
  /**
   * @remarks
   * Type of the Agent
   * 
   * @example
   * control
   */
  type?: string;
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  updatedAt?: string;
  /**
   * @remarks
   * Widget version information
   */
  versions?: GetAgentResponseBodyDataVersions[];
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      description: 'description',
      id: 'id',
      name: 'name',
      supportArch: 'support_arch',
      type: 'type',
      updatedAt: 'updated_at',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      supportArch: 'string',
      type: 'string',
      updatedAt: 'string',
      versions: { 'type': 'array', 'itemType': GetAgentResponseBodyDataVersions },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID, which can be used for end-to-end Diagnosis
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  requestId?: string;
  /**
   * @remarks
   * Status code  
   * - `code == Success` indicates that authorization succeeded.  
   * - Other status codes indicate that authorization failed. When authorization fails, view the `message` field to obtain detailed error message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: GetAgentResponseBodyData;
  /**
   * @remarks
   * Error message  
   * - If `code == Success`, this field is empty;  
   * - Otherwise, this field contains the Request error message.
   * 
   * @example
   * SysomOpenAPIException: SysomOpenAPI.InvalidParameter Invalid params, should be json string or dict
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: GetAgentResponseBodyData,
      message: 'string',
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

