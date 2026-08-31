// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataAssetsGovernObjectResponseBodyGovernObjectInfoOwners extends $dara.Model {
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * 龚恒菊2088822037866701
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 300006218
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAssetsGovernObjectResponseBodyGovernObjectInfoProblem extends $dara.Model {
  /**
   * @remarks
   * The object ID.
   * 
   * @example
   * 36ea160807b14216b62a939327941e8b
   */
  objectId?: string;
  /**
   * @remarks
   * The ID of the parent object.
   * 
   * @example
   * 913836
   */
  parentObjectId?: string;
  /**
   * @remarks
   * The contact email for the governance issue.
   * 
   * @example
   * 178986769@gmail.com
   */
  problemContactMail?: string;
  /**
   * @remarks
   * The other contact information for the governance issue.
   * 
   * @example
   * Jane
   */
  problemContactOther?: string;
  /**
   * @remarks
   * The contact phone number for the governance issue.
   * 
   * @example
   * 12596178752
   */
  problemContactPhone?: string;
  /**
   * @remarks
   * The description of the governance issue.
   * 
   * @example
   * Test issue
   */
  problemDesc?: string;
  /**
   * @remarks
   * The submission method of the issue.
   * 
   * @example
   * SYSTEM
   */
  problemSubmitType?: string;
  /**
   * @remarks
   * The user who submitted the issue.
   * 
   * @example
   * 300006218
   */
  problemSubmitter?: string;
  /**
   * @remarks
   * The username of the user who submitted the issue.
   * 
   * @example
   * John
   */
  problemSubmitterUserName?: string;
  /**
   * @remarks
   * The types of the governance issue.
   */
  problemTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      objectId: 'ObjectId',
      parentObjectId: 'ParentObjectId',
      problemContactMail: 'ProblemContactMail',
      problemContactOther: 'ProblemContactOther',
      problemContactPhone: 'ProblemContactPhone',
      problemDesc: 'ProblemDesc',
      problemSubmitType: 'ProblemSubmitType',
      problemSubmitter: 'ProblemSubmitter',
      problemSubmitterUserName: 'ProblemSubmitterUserName',
      problemTypes: 'ProblemTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectId: 'string',
      parentObjectId: 'string',
      problemContactMail: 'string',
      problemContactOther: 'string',
      problemContactPhone: 'string',
      problemDesc: 'string',
      problemSubmitType: 'string',
      problemSubmitter: 'string',
      problemSubmitterUserName: 'string',
      problemTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.problemTypes)) {
      $dara.Model.validateArray(this.problemTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAssetsGovernObjectResponseBodyGovernObjectInfoRelatedKnowledge extends $dara.Model {
  /**
   * @remarks
   * The cause of the issue.
   * 
   * @example
   * NC tag test
   */
  cause?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Yangchun Maternal and Child Health Cloud Service Space
   */
  desc?: string;
  /**
   * @remarks
   * The ID of the knowledge entry.
   * 
   * @example
   * 522072057231
   */
  knowledgeId?: number;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * leisatc
   */
  owner?: string;
  /**
   * @remarks
   * The name of the owner.
   * 
   * @example
   * buc_166994
   */
  ownerName?: string;
  /**
   * @remarks
   * The Solutions.
   * 
   * @example
   * RPBioOnly
   */
  solution?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * Makassar International Eight Festival & Forum (F8 Makassar)
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cause: 'Cause',
      desc: 'Desc',
      knowledgeId: 'KnowledgeId',
      owner: 'Owner',
      ownerName: 'OwnerName',
      solution: 'Solution',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cause: 'string',
      desc: 'string',
      knowledgeId: 'number',
      owner: 'string',
      ownerName: 'string',
      solution: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAssetsGovernObjectResponseBodyGovernObjectInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the governance object was reported.
   * 
   * @example
   * 2026-08-31 10:06:01
   */
  commitTime?: string;
  /**
   * @remarks
   * The governance object ID.
   * 
   * @example
   * 96928483120
   */
  governItemId?: number;
  /**
   * @remarks
   * The governance object ID.
   * 
   * @example
   * 54295947412
   */
  governObjectId?: number;
  /**
   * @remarks
   * Indicates whether rectification is in progress.
   */
  isRectify?: boolean;
  /**
   * @remarks
   * The list of owners.
   */
  owners?: GetDataAssetsGovernObjectResponseBodyGovernObjectInfoOwners[];
  /**
   * @remarks
   * The governance issue object.
   */
  problem?: GetDataAssetsGovernObjectResponseBodyGovernObjectInfoProblem;
  /**
   * @remarks
   * The properties.
   * 
   * @example
   * "properties": {
   *                 "gmt_create": "2026-08-24 06:00:19.649",
   *                 "index_compute_type": "",
   *                 "table_env": "PROD",
   *                 "table_datasource_id": "1",
   *                 "index_catalog": "",
   *                 "qd_feature_owner": "",
   *                 "rule_task_start_time": "2026-08-24 06:00:01",
   *                 "table_id": "odps.300023201.fashion_ads.api2mysql_demo",
   *                 "rule_strength": "WEAK",
   *                 "table_biz_unit_name": "LD_Fashion",
   *                 "table_name": "fashion_ads.api2mysql_demo",
   *                 "index_type": "",
   *                 "table_datasource_from": "META_DATA",
   *                 "datasource_type": "MAX_COMPUTE",
   *                 "datasource_scope": "OFFLINE",
   *                 "template_zh_tw_name": "欄位空值校正",
   *                 "problem_submit_type": "SYSTEM",
   *                 "template_type": "FIELD_NULL_VALUE_VALIDATE",
   *                 "index_name_cn": "",
   *                 "datasource_name": "Dataphin",
   *                 "id": "909586",
   *                 "index_id": "",
   *                 "validate_partition": "ds=\\"20260824\\"",
   *                 "index_owner_id": "",
   *                 "datasource_owner": "300006218",
   *                 "rule_name": "date_odps_test_2025-09-22 20:32:07",
   *                 "watch_type": "TABLE",
   *                 "validate_status": "NOT_PASS",
   *                 "qd_feature_id": "",
   *                 "table_desc": "api2mysql_demo",
   *                 "is_ignore": "false",
   *                 "rule_desc": "",
   *                 "table_partitioned": "true",
   *                 "template_owner": "300006218",
   *                 "index_biz_unit_id": "",
   *                 "table_biz_unit_id": "6865277495315392",
   *                 "index_biz_unit_name": "",
   *                 "watch_env": "PROD",
   *                 "problem_contact_other": "",
   *                 "status": "NEW",
   *                 "datasource_from": "META_DATA",
   *                 "table_project_name": "fashion_ads",
   *                 "tenant_id": "300023201",
   *                 "datasource_env": "PROD",
   *                 "template_en_name": "Verify Field Null Values",
   *                 "commit_time": "2026-08-24 06:00:18.73",
   *                 "gmt_modified": "2026-08-24 06:00:19.649",
   *                 "qd_feature_name": "",
   *                 "table_catalog": "fashion_ads",
   *                 "rule_status": "ENABLE",
   *                 "problem_contact_mail": "",
   *                 "rule_task_status": "SUCCESS",
   *                 "rule_validate_object_type": "COLUMN",
   *                 "watch_status": "ENABLE",
   *                 "index_guid": "",
   *                 "system_template": "true",
   *                 "quality_owners": "300006218",
   *                 "index_name": "",
   *                 "problem_contact_phone": "",
   *                 "watch_task_id": "8199222",
   *                 "rule_task_id": "8199227",
   *                 "index_desc": "",
   *                 "table_type": "PHYSICAL_TABLE",
   *                 "table_project_id": "6865331520706176",
   *                 "trace_id": "time:4326023",
   *                 "datasource_id": "1",
   *                 "qd_feature_code": "",
   *                 "rule_validate_object_name": "date_odps",
   *                 "problem_desc": "date_odps_test_2025-09-22 20:32:07",
   *                 "table_owner": "300006218",
   *                 "quality_owner_groups": "",
   *                 "govern_item_id": "100",
   *                 "rule_catalogs": "COMPLETENESS",
   *                 "table_datasource_type": "MAX_COMPUTE",
   *                 "template_zh_cn_name": "字段空值校验",
   *                 "rule_task_biz_date": "20260824 06:00:00",
   *                 "problem_types": "[{\\"value\\":\\"COMPLETENESS\\"}]",
   *                 "rule_id": "4322944",
   *                 "problem_attachment_file_ids": "null",
   *                 "watch_name": "",
   *                 "template_name": "",
   *                 "schedule_params": "",
   *                 "is_rectify": "false",
   *                 "rule_task_end_time": "",
   *                 "watch_id": "3841908",
   *                 "validate_result": "false",
   *                 "qd_feature_guid": "",
   *                 "govern_object_id": "910181",
   *                 "template_id": "100"
   *             }
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the rectification.
   * 
   * @example
   * 49169072991
   */
  rectifyId?: number;
  /**
   * @remarks
   * The name of the rectification.
   * 
   * @example
   * Rectification process 1
   */
  rectifyName?: string;
  /**
   * @remarks
   * The rectification status.
   * 
   * @example
   * NEW
   */
  rectifyStatus?: string;
  /**
   * @remarks
   * The ID of the user who performs the rectification.
   * 
   * @example
   * 566777
   */
  rectifyUser?: string;
  /**
   * @remarks
   * The display name of the rectification user.
   * 
   * @example
   * John
   */
  rectifyUserName?: string;
  /**
   * @remarks
   * The related knowledge base.
   */
  relatedKnowledge?: GetDataAssetsGovernObjectResponseBodyGovernObjectInfoRelatedKnowledge[];
  /**
   * @remarks
   * The status of the governance object.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * The submission method.
   * 
   * @example
   * SYSTEM
   */
  submitType?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * -17163770809
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      commitTime: 'CommitTime',
      governItemId: 'GovernItemId',
      governObjectId: 'GovernObjectId',
      isRectify: 'IsRectify',
      owners: 'Owners',
      problem: 'Problem',
      properties: 'Properties',
      rectifyId: 'RectifyId',
      rectifyName: 'RectifyName',
      rectifyStatus: 'RectifyStatus',
      rectifyUser: 'RectifyUser',
      rectifyUserName: 'RectifyUserName',
      relatedKnowledge: 'RelatedKnowledge',
      status: 'Status',
      submitType: 'SubmitType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitTime: 'string',
      governItemId: 'number',
      governObjectId: 'number',
      isRectify: 'boolean',
      owners: { 'type': 'array', 'itemType': GetDataAssetsGovernObjectResponseBodyGovernObjectInfoOwners },
      problem: GetDataAssetsGovernObjectResponseBodyGovernObjectInfoProblem,
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rectifyId: 'number',
      rectifyName: 'string',
      rectifyStatus: 'string',
      rectifyUser: 'string',
      rectifyUserName: 'string',
      relatedKnowledge: { 'type': 'array', 'itemType': GetDataAssetsGovernObjectResponseBodyGovernObjectInfoRelatedKnowledge },
      status: 'string',
      submitType: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.owners)) {
      $dara.Model.validateArray(this.owners);
    }
    if(this.problem && typeof (this.problem as any).validate === 'function') {
      (this.problem as any).validate();
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    if(Array.isArray(this.relatedKnowledge)) {
      $dara.Model.validateArray(this.relatedKnowledge);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAssetsGovernObjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The governance object details.
   */
  governObjectInfo?: GetDataAssetsGovernObjectResponseBodyGovernObjectInfo;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend response exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      governObjectInfo: 'GovernObjectInfo',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      governObjectInfo: GetDataAssetsGovernObjectResponseBodyGovernObjectInfo,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.governObjectInfo && typeof (this.governObjectInfo as any).validate === 'function') {
      (this.governObjectInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

