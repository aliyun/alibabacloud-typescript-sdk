// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGovernObjectsResponseBodyPageResultDataOwners extends $dara.Model {
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * Yang Jing 2088252351182803
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123456
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

export class ListGovernObjectsResponseBodyPageResultDataProblem extends $dara.Model {
  /**
   * @remarks
   * The object ID.
   * 
   * @example
   * 9223058119411358258
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
   * 126983612986391@gamail.com
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
   * 16278902467
   */
  problemContactPhone?: string;
  /**
   * @remarks
   * The description of the governance issue.
   * 
   * @example
   * Governance issue description
   */
  problemDesc?: string;
  /**
   * @remarks
   * The submission type of the issue.
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
   * 123456
   */
  problemSubmitter?: string;
  /**
   * @remarks
   * The username of the issue submitter.
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

export class ListGovernObjectsResponseBodyPageResultDataRelatedKnowledge extends $dara.Model {
  /**
   * @remarks
   * The cause of the issue.
   * 
   * @example
   * Host exception. The instance was migrated with data loss
   */
  cause?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Store scheduled power on/off business domain canary list\\n
   */
  desc?: string;
  /**
   * @remarks
   * The knowledge entry ID.
   * 
   * @example
   * -341426256859
   */
  knowledgeId?: number;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * -mnneiiwtemj-wjuggee
   */
  owner?: string;
  /**
   * @remarks
   * The name of the owner.
   * 
   * @example
   * buc_459782
   */
  ownerName?: string;
  /**
   * @remarks
   * The Solutions.
   * 
   * @example
   * {\\"Type\\":\\"text\\",\\"Value\\":\\"OSS public network access\\"}
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

export class ListGovernObjectsResponseBodyPageResultData extends $dara.Model {
  /**
   * @remarks
   * The time when the record was reported.
   * 
   * @example
   * 2026-08-31 10:10:59
   */
  commitTime?: string;
  /**
   * @remarks
   * The governance object ID.
   * 
   * @example
   * 139487419630
   */
  governItemId?: number;
  /**
   * @remarks
   * The governance object ID.
   * 
   * @example
   * -643545112181
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
  owners?: ListGovernObjectsResponseBodyPageResultDataOwners[];
  /**
   * @remarks
   * The governance issue object.
   */
  problem?: ListGovernObjectsResponseBodyPageResultDataProblem;
  /**
   * @remarks
   * The property values.
   * 
   * @example
   * {
   *                     "gmt_create": "2026-08-31 06:00:22.296",
   *                     "index_compute_type": "",
   *                     "table_env": "PROD",
   *                     "table_datasource_id": "1",
   *                     "owner_id": "300006218",
   *                     "index_catalog": "",
   *                     "qd_feature_owner": "",
   *                     "rule_task_start_time": "2026-08-31 06:00:00",
   *                     "table_id": "odps.300023201.fashion_ads.api2mysql_demo",
   *                     "rule_strength": "WEAK",
   *                     "table_biz_unit_name": "LD_Fashion",
   *                     "table_name": "fashion_ads.api2mysql_demo",
   *                     "index_type": "",
   *                     "table_datasource_from": "META_DATA",
   *                     "datasource_type": "MaxCompute",
   *                     "datasource_scope": "OFFLINE",
   *                     "template_zh_tw_name": "欄位空值校正",
   *                     "problem_submit_type": "SYSTEM",
   *                     "template_type": "FIELD_NULL_VALUE_VALIDATE",
   *                     "index_name_cn": "",
   *                     "datasource_name": "Dataphin",
   *                     "id": "918363",
   *                     "index_id": "",
   *                     "validate_partition": "ds=\\"20260831\\"",
   *                     "index_owner_id": "",
   *                     "datasource_owner": "300006218",
   *                     "rule_name": "date_odps_test_2025-09-22 20:32:07",
   *                     "watch_type": "TABLE",
   *                     "validate_status": "NOT_PASS",
   *                     "qd_feature_id": "",
   *                     "table_desc": "api2mysql_demo",
   *                     "is_ignore": "false",
   *                     "rule_desc": "",
   *                     "table_partitioned": "true",
   *                     "template_owner": "300006218",
   *                     "index_biz_unit_id": "",
   *                     "table_biz_unit_id": "6865277495315392",
   *                     "index_biz_unit_name": "",
   *                     "watch_env": "PROD",
   *                     "problem_contact_other": "",
   *                     "status": "NEW",
   *                     "datasource_from": "META_DATA",
   *                     "table_project_name": "fashion_ads",
   *                     "tenant_id": "300023201",
   *                     "datasource_env": "PROD",
   *                     "template_en_name": "Verify Field Null Values",
   *                     "commit_time": "2026-08-31 06:00:21.135",
   *                     "gmt_modified": "2026-08-31 06:00:22.296",
   *                     "qd_feature_name": "",
   *                     "table_catalog": "fashion_ads",
   *                     "rule_status": "ENABLE",
   *                     "problem_contact_mail": "",
   *                     "rule_task_status": "SUCCESS",
   *                     "rule_validate_object_type": "COLUMN",
   *                     "watch_status": "ENABLE",
   *                     "index_guid": "",
   *                     "system_template": "true",
   *                     "quality_owners": "300006218",
   *                     "index_name": "",
   *                     "problem_contact_phone": "",
   *                     "watch_task_id": "8325922",
   *                     "rule_task_id": "8328383",
   *                     "index_desc": "",
   *                     "table_type": "PHYSICAL_TABLE",
   *                     "table_project_id": "6865331520706176",
   *                     "trace_id": "time:4326023",
   *                     "datasource_id": "1",
   *                     "qd_feature_code": "",
   *                     "rule_validate_object_name": "date_odps",
   *                     "problem_desc": "date_odps_test_2025-09-22 20:32:07",
   *                     "table_owner": "300006218",
   *                     "quality_owner_groups": "",
   *                     "govern_item_id": "100",
   *                     "rule_catalogs": "COMPLETENESS",
   *                     "table_datasource_type": "MAX_COMPUTE",
   *                     "template_zh_cn_name": "字段空值校验",
   *                     "rule_task_biz_date": "20260831 06:00:00",
   *                     "problem_types": "[{\\"value\\":\\"COMPLETENESS\\"}]",
   *                     "rule_id": "4322944",
   *                     "problem_attachment_file_ids": "null",
   *                     "watch_name": "",
   *                     "template_name": "",
   *                     "schedule_params": "",
   *                     "is_rectify": "false",
   *                     "rule_task_end_time": "",
   *                     "watch_id": "3841908",
   *                     "validate_result": "false",
   *                     "qd_feature_guid": "",
   *                     "govern_object_id": "913836",
   *                     "template_id": "100"
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The rectification ID.
   * 
   * @example
   * -787032739353
   */
  rectifyId?: number;
  /**
   * @remarks
   * The name of the rectification.
   * 
   * @example
   * Test rectification
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
   * The related knowledge base entries.
   */
  relatedKnowledge?: ListGovernObjectsResponseBodyPageResultDataRelatedKnowledge[];
  /**
   * @remarks
   * The status of the governance object.
   * 
   * @example
   * Success
   */
  status?: string;
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
      relatedKnowledge: 'RelatedKnowledge',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitTime: 'string',
      governItemId: 'number',
      governObjectId: 'number',
      isRectify: 'boolean',
      owners: { 'type': 'array', 'itemType': ListGovernObjectsResponseBodyPageResultDataOwners },
      problem: ListGovernObjectsResponseBodyPageResultDataProblem,
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rectifyId: 'number',
      rectifyName: 'string',
      rectifyStatus: 'string',
      relatedKnowledge: { 'type': 'array', 'itemType': ListGovernObjectsResponseBodyPageResultDataRelatedKnowledge },
      status: 'string',
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

export class ListGovernObjectsResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The paged list of governance objects.
   */
  data?: ListGovernObjectsResponseBodyPageResultData[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListGovernObjectsResponseBodyPageResultData },
      totalCount: 'number',
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

export class ListGovernObjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
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
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paged query result.
   */
  pageResult?: ListGovernObjectsResponseBodyPageResult;
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListGovernObjectsResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

