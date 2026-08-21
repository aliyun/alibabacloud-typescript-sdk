// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentResponseBodyDataVersions extends $dara.Model {
  /**
   * @remarks
   * The time when the agent version was created.
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  createdAt?: string;
  /**
   * @remarks
   * The installation script for this agent version.
   * 
   * @example
   * sysom.sh install
   */
  installScript?: string;
  /**
   * @remarks
   * The uninstallation script for this agent version.
   * 
   * @example
   * sysom.sh uninstall
   */
  uninstallScript?: string;
  /**
   * @remarks
   * The time when the agent version was last updated.
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  updatedAt?: string;
  /**
   * @remarks
   * The update script for this agent version.
   * 
   * @example
   * sysom.sh upgrade
   */
  upgradeScript?: string;
  /**
   * @remarks
   * The agent version number.
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
   * The time when the component was created.
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  createdAt?: string;
  /**
   * @remarks
   * The component description.
   * 
   * @example
   * SysOM Agent
   */
  description?: string;
  /**
   * @remarks
   * The component ID.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  id?: string;
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * SysOM
   */
  name?: string;
  /**
   * @remarks
   * The supported architectures.
   * 
   * @example
   * x86
   */
  supportArch?: string;
  /**
   * @remarks
   * The agent type.
   * 
   * @example
   * control
   */
  type?: string;
  /**
   * @remarks
   * The time when the component was last updated.
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  updatedAt?: string;
  /**
   * @remarks
   * The component version information.
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
   * The request ID, which can be used for end-to-end diagnostics.
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * - `code == Success` indicates that the authorization is successful.
   * - Other status codes indicate that the authorization failed. If the authorization fails, check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAgentResponseBodyData;
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error information.
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

