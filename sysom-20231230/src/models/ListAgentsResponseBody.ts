// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsResponseBodyDataVersions extends $dara.Model {
  /**
   * @remarks
   * The time when the component version was created.
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  createdAt?: string;
  /**
   * @remarks
   * The installation script of the component.
   * 
   * @example
   * sysom.sh install
   */
  installScript?: string;
  /**
   * @remarks
   * The uninstallation script of the component.
   * 
   * @example
   * sysom.sh uninstall
   */
  uninstallScript?: string;
  /**
   * @remarks
   * The time when the component version was updated.
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  updatedAt?: string;
  /**
   * @remarks
   * The update script of the component.
   * 
   * @example
   * sysom.sh upgrade
   */
  upgradeScript?: string;
  /**
   * @remarks
   * The component version number.
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

export class ListAgentsResponseBodyData extends $dara.Model {
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
   * SysOM Agent
   */
  name?: string;
  /**
   * @remarks
   * The supported architectures (multiple architectures are separated by commas).
   * 
   * @example
   * x86
   */
  supportArch?: string;
  /**
   * @remarks
   * The type of the component. Valid values:
   * - Control: control-type component.
   * - AI: AI component.
   * 
   * @example
   * Control
   */
  type?: string;
  /**
   * @remarks
   * The time when the component was updated.
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  updatedAt?: string;
  /**
   * @remarks
   * The list of component versions.
   */
  versions?: ListAgentsResponseBodyDataVersions[];
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
      versions: { 'type': 'array', 'itemType': ListAgentsResponseBodyDataVersions },
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

export class ListAgentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which can be used for end-to-end diagnostics.
   * 
   * @example
   * 66EAED72-542B-583B-BCED-64433DC27AD7
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * - `code == Success` indicates that the authorization is successful.
   * - Other status codes indicate that the authorization failed. Check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListAgentsResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error information.
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAgentsResponseBodyData },
      message: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

