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
   * The total number of entries returned.
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
   * The opcode of the playbook, which corresponds to the opcode of the playbook recommended for entity handling.
   * 
   * @example
   * 7
   */
  opCode?: string;
  /**
   * @remarks
   * Indicates whether quick event handling is selected by default. Valid values:
   * 
   * *   2: Quick event handling is selected.
   * *   1: Quick event handling is displayed but not selected.
   * 
   * @example
   * 2
   */
  opLevel?: string;
  /**
   * @remarks
   * The playbook parameters and the corresponding properties.
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
   * @example
   * kill_process_isolate_file
   */
  uuid?: string;
  /**
   * @remarks
   * Indicates whether the playbook is intended for Web Application Firewall (WAF). Valid values:
   * 
   * *   true
   * *   false
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
      name: 'Name',
      opCode: 'OpCode',
      opLevel: 'OpLevel',
      paramConfig: 'ParamConfig',
      taskConfig: 'TaskConfig',
      uuid: 'Uuid',
      wafPlaybook: 'WafPlaybook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'string',
      description: 'string',
      displayName: 'string',
      name: 'string',
      opCode: 'string',
      opLevel: 'string',
      paramConfig: { 'type': 'array', 'itemType': 'any' },
      taskConfig: 'string',
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
   * The number of alerts that are associated with the entity.
   * 
   * @example
   * 1
   */
  alertNum?: number;
  /**
   * @remarks
   * The object for handling.
   * 
   * @example
   * 192.168.1.1
   */
  dispose?: string;
  /**
   * @remarks
   * The entity ID
   * 
   * @example
   * 12345
   */
  entityId?: number;
  /**
   * @remarks
   * The entity information.
   * 
   * @example
   * {"file_path": "c:/www/leixi.jsp","file_hash": "aa0ca926ad948cd820e0a3d9a18c09d0","host_uuid": "efed2cf7-0b77-45d9-a97b-d2cf246bcbb3","malware_type": "${aliyun.siem.sas.alert_tag.webshell}","host_name": "launch-advisor-20230531"}
   */
  entityInfo?: { [key: string]: any };
  /**
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The key-value pairs each of which consists of opcode and oplevel.
   * 
   * @example
   * 12345
   */
  opcodeMap?: { [key: string]: string };
  /**
   * @remarks
   * The codes of the playbooks that are recommended for entity handling.
   * 
   * @example
   * [1,3]
   */
  opcodeSet?: string[];
  /**
   * @remarks
   * The playbooks that can handle the entity.
   */
  playbookList?: DescribeDisposeAndPlaybookResponseBodyDataResponseDataPlaybookList[];
  /**
   * @remarks
   * The IDs of the users who can handle objects.
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
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeDisposeAndPlaybookResponseBodyData;
  /**
   * @remarks
   * The returned message.
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
   * *   true
   * *   false
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

