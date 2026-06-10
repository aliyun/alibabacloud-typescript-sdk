// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsResponseBodyDataVersions extends $dara.Model {
  /**
   * @remarks
   * Widget version creation time
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  createdAt?: string;
  /**
   * @remarks
   * The widget\\"s install script
   * 
   * @example
   * sysom.sh install
   */
  installScript?: string;
  /**
   * @remarks
   * Widget uninstall script
   * 
   * @example
   * sysom.sh uninstall
   */
  uninstallScript?: string;
  /**
   * @remarks
   * Widget version update time
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  updatedAt?: string;
  /**
   * @remarks
   * Widget upgrade script
   * 
   * @example
   * sysom.sh upgrade
   */
  upgradeScript?: string;
  /**
   * @remarks
   * Widget version number
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
   * Widget creation time
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  createdAt?: string;
  /**
   * @remarks
   * Widget description
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
   * Widget name
   * 
   * @example
   * SysOM Agent
   */
  name?: string;
  /**
   * @remarks
   * Supported architecture (multiple architectures separated by commas)
   * 
   * @example
   * x86
   */
  supportArch?: string;
  /**
   * @remarks
   * Widget type  
   * - Control: control-type widget  
   * - AI: AI widget
   * 
   * @example
   * Control
   */
  type?: string;
  /**
   * @remarks
   * Widget Update Time
   * 
   * @example
   * 2024-09-14T20:46:08
   */
  updatedAt?: string;
  /**
   * @remarks
   * Widget Version List
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
   * Request ID, which can be used for end-to-end Diagnosis
   * 
   * @example
   * 66EAED72-542B-583B-BCED-64433DC27AD7
   */
  requestId?: string;
  /**
   * @remarks
   * Status code  
   * - `code == Success` indicates successful authorization;  
   * - Other status codes indicate authorization failure. When authorization fails, view the `message` field to obtain detailed error message;
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned Data
   */
  data?: ListAgentsResponseBodyData[];
  /**
   * @remarks
   * Error message  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  /**
   * @remarks
   * Total number of records.
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

