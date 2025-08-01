// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsResponseBodyDataVersions extends $dara.Model {
  createdAt?: string;
  installScript?: string;
  uninstallScript?: string;
  updatedAt?: string;
  upgradeScript?: string;
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
  createdAt?: string;
  description?: string;
  id?: string;
  /**
   * @example
   * SysOM Agent
   */
  name?: string;
  /**
   * @example
   * x86
   */
  supportArch?: string;
  /**
   * @example
   * Control
   */
  type?: string;
  updatedAt?: string;
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
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListAgentsResponseBodyData[];
  /**
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
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

