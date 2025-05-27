// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisposeAndPlaybookResponseBodyDataResponseDataPlaybookList } from "./DescribeDisposeAndPlaybookResponseBodyDataResponseDataPlaybookList";


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
   * 
   * @example
   * [{"name":"云安全中心-云服务器安全","code":"1"}]
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

