// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisposeAndPlaybookResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisposeAndPlaybookResponseBodyDataResponseDataPlaybookList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the playbook is available.
   * 
   * @example
   * 1
   */
  available?: string;
  /**
   * @remarks
   * The playbook description.
   * 
   * @example
   * WafBlockIP
   */
  description?: string;
  /**
   * @remarks
   * The display name of the playbook.
   * 
   * @example
   * WafBlockIP
   */
  displayName?: string;
  disposeStatus?: string;
  errorMessage?: string;
  /**
   * @remarks
   * The playbook name, which is the unique identifier of the playbook.
   * 
   * @example
   * kill_process_isolate_file
   */
  name?: string;
  /**
   * @remarks
   * The playbook opcode, which corresponds to the recommended playbook opcode for entity disposition.
   * 
   * @example
   * 7
   */
  opCode?: string;
  /**
   * @remarks
   * Specifies whether the playbook is selected by default for one-click incident disposition. Valid values:
   * 
   * @example
   * 2
   */
  opLevel?: string;
  /**
   * @remarks
   * The parameter list of the playbook and the corresponding parameter properties.
   */
  paramConfig?: any[];
  /**
   * @remarks
   * The opcode configuration.
   * 
   * @example
   * {"opCode":"3"}
   */
  taskConfig?: string;
  /**
   * @remarks
   * The code that indicates why the playbook is unavailable.
   * 
   * Valid values:
   * - PARAM_INVALID: The input parameters are invalid.
   * - NO_INGESTION: The corresponding product is not connected.
   * 
   * @example
   * PARAM_INVALID
   */
  unAvailableCode?: string;
  /**
   * @remarks
   * The playbook UUID, which is the unique identifier of the playbook.
   * 
   * @example
   * kill_process_isolate_file
   */
  uuid?: string;
  /**
   * @remarks
   * Indicates whether the playbook is a WAF playbook. Valid values:
   * 
   * @example
   * false
   */
  wafPlaybook?: boolean;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      description: 'Description',
      displayName: 'DisplayName',
      disposeStatus: 'DisposeStatus',
      errorMessage: 'ErrorMessage',
      name: 'Name',
      opCode: 'OpCode',
      opLevel: 'OpLevel',
      paramConfig: 'ParamConfig',
      taskConfig: 'TaskConfig',
      unAvailableCode: 'UnAvailableCode',
      uuid: 'Uuid',
      wafPlaybook: 'WafPlaybook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'string',
      description: 'string',
      displayName: 'string',
      disposeStatus: 'string',
      errorMessage: 'string',
      name: 'string',
      opCode: 'string',
      opLevel: 'string',
      paramConfig: { 'type': 'array', 'itemType': 'any' },
      taskConfig: 'string',
      unAvailableCode: 'string',
      uuid: 'string',
      wafPlaybook: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.paramConfig)) {
      $dara.Model.validateArray(this.paramConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisposeAndPlaybookResponseBodyDataResponseData extends $dara.Model {
  /**
   * @remarks
   * The number of alerts associated with the entity.
   * 
   * @example
   * 1
   */
  alertNum?: number;
  /**
   * @remarks
   * The disposition object.
   * 
   * @example
   * 192.168.*.*
   */
  dispose?: string;
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * 12345****
   */
  entityId?: number;
  /**
   * @remarks
   * The entity information.
   * 
   * @example
   * {"file_path": "c:/www/leixi.jsp","file_hash": "aa0ca926ad948cd820e0a3d9a18c****","host_uuid": "efed2cf7-0b77-45d9-a97b-d2cf246b****","malware_type": "${aliyun.siem.sas.alert_tag.webshell}","host_name": "launch-advisor-2023****"}
   */
  entityInfo?: { [key: string]: any };
  /**
   * @remarks
   * The entity type. Valid values:
   * - ip: IP address
   * - domain: domain name
   * - url: URL
   * - process: process
   * - file: file
   * - host: host
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The key-value pairs of opcode and oplevel.
   * 
   * @example
   * 12345
   */
  opcodeMap?: { [key: string]: string };
  /**
   * @remarks
   * The recommended playbook opcodes for entity disposition.
   * 
   * @example
   * [1,3]
   */
  opcodeSet?: string[];
  /**
   * @remarks
   * The list of playbooks that can dispose of the entity.
   * 
   * @example
   * [{"name":"Security Center - Cloud Server Security","code":"1"}]
   */
  playbookList?: DescribeDisposeAndPlaybookResponseBodyDataResponseDataPlaybookList[];
  /**
   * @remarks
   * The disposition scope, which is the list of user IDs that can perform the disposition.
   * 
   * @example
   * 176618589410****
   */
  scope?: any[];
  static names(): { [key: string]: string } {
    return {
      alertNum: 'AlertNum',
      dispose: 'Dispose',
      entityId: 'EntityId',
      entityInfo: 'EntityInfo',
      entityType: 'EntityType',
      opcodeMap: 'OpcodeMap',
      opcodeSet: 'OpcodeSet',
      playbookList: 'PlaybookList',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNum: 'number',
      dispose: 'string',
      entityId: 'number',
      entityInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      entityType: 'string',
      opcodeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      opcodeSet: { 'type': 'array', 'itemType': 'string' },
      playbookList: { 'type': 'array', 'itemType': DescribeDisposeAndPlaybookResponseBodyDataResponseDataPlaybookList },
      scope: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(this.entityInfo) {
      $dara.Model.validateMap(this.entityInfo);
    }
    if(this.opcodeMap) {
      $dara.Model.validateMap(this.opcodeMap);
    }
    if(Array.isArray(this.opcodeSet)) {
      $dara.Model.validateArray(this.opcodeSet);
    }
    if(Array.isArray(this.playbookList)) {
      $dara.Model.validateArray(this.playbookList);
    }
    if(Array.isArray(this.scope)) {
      $dara.Model.validateArray(this.scope);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisposeAndPlaybookResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeDisposeAndPlaybookResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: DescribeDisposeAndPlaybookResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeDisposeAndPlaybookResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': DescribeDisposeAndPlaybookResponseBodyDataResponseData },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.responseData)) {
      $dara.Model.validateArray(this.responseData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisposeAndPlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * 123456
   */
  data?: DescribeDisposeAndPlaybookResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeDisposeAndPlaybookResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

