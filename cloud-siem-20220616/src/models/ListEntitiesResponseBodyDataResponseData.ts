// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEntitiesResponseBodyDataResponseData extends $dara.Model {
  /**
   * @example
   * 1
   */
  alertNum?: number;
  /**
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @example
   * 123456789****
   */
  aliuid?: number;
  /**
   * @example
   * aliyun
   */
  cloudCode?: string;
  /**
   * @example
   * 12345****
   */
  entityId?: string;
  /**
   * @example
   * {"file_path": "c:/www/leixi.jsp","file_hash": "aa0ca926ad948cd820e0a3d9a18c****","host_uuid": "efed2cf7-0b77-45d9-a97b-d2cf246b****","malware_type": "${aliyun.siem.sas.alert_tag.webshell}","host_name": "launch-advisor-2023****"}
   */
  entityInfo?: string;
  /**
   * @example
   * 123.123.123.123
   */
  entityName?: string;
  /**
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @example
   * 8087b3e4aa6862852c100c8738cf****
   */
  entityUuid?: string;
  /**
   * @example
   * 1
   */
  eventNum?: number;
  /**
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @example
   * 123456789***
   */
  id?: number;
  /**
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  isAsset?: string;
  isMalware?: string;
  /**
   * @example
   * aliyun.siem.sas.alert_tag.webshell
   */
  malwareType?: string;
  /**
   * @example
   * 113091674488****
   */
  subUserId?: number;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      alertNum: 'AlertNum',
      alertUuid: 'AlertUuid',
      aliuid: 'Aliuid',
      cloudCode: 'CloudCode',
      entityId: 'EntityId',
      entityInfo: 'EntityInfo',
      entityName: 'EntityName',
      entityType: 'EntityType',
      entityUuid: 'EntityUuid',
      eventNum: 'EventNum',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      incidentUuid: 'IncidentUuid',
      isAsset: 'IsAsset',
      isMalware: 'IsMalware',
      malwareType: 'MalwareType',
      subUserId: 'SubUserId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNum: 'number',
      alertUuid: 'string',
      aliuid: 'number',
      cloudCode: 'string',
      entityId: 'string',
      entityInfo: 'string',
      entityName: 'string',
      entityType: 'string',
      entityUuid: 'string',
      eventNum: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      incidentUuid: 'string',
      isAsset: 'string',
      isMalware: 'string',
      malwareType: 'string',
      subUserId: 'number',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

