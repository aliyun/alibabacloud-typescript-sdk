// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentPackageFilesResponseBodyPagingInfoDeploymentPackageFiles extends $dara.Model {
  /**
   * @remarks
   * The change type. Valid values: 
   * - 0: added.
   * - 1: updated.
   * - 2: deleted.
   * 
   * @example
   * 0
   */
  changeType?: number;
  /**
   * @remarks
   * The comment provided at the time of commit.
   * 
   * @example
   * Test commit
   */
  comment?: string;
  /**
   * @remarks
   * The commit time.
   * 
   * The format is `yyyy-MM-dd HH:mm:ss`, for example, `2025-04-10 15:55:47`. This example does not include a time zone identifier.
   * 
   * @example
   * 2025-04-10 15:55:47
   */
  commitTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the committer.
   * 
   * @example
   * 446***
   */
  commitUser?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the committer.
   * 
   * @example
   * user***
   */
  commitUserName?: string;
  /**
   * @remarks
   * The ID of the file.
   * 
   * @example
   * 520246913
   */
  fileId?: number;
  /**
   * @remarks
   * The name of the file that generated this file version.
   * 
   * @example
   * bak_part_basc_person_relation_all_da
   */
  fileName?: string;
  /**
   * @remarks
   * The file type. Different file types have different codes. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 13
   */
  fileType?: number;
  /**
   * @remarks
   * The version number of the file.
   * 
   * @example
   * 34
   */
  fileVersion?: number;
  /**
   * @remarks
   * The unique identifier.
   * 
   * @example
   * 650433503
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether this version is the same as the current production version in scheduling.
   * 
   * @example
   * true
   */
  isSameAsProductionVersion?: boolean;
  /**
   * @remarks
   * The scheduling property configuration of the scheduling node to which this file belongs, stored as a JSON string.
   * 
   * @example
   * {
   * 	"tagList": [],
   * 	"fileId": -1,
   * 	"taskRerunTime": 0,
   * 	"taskRerunInterval": 0,
   * 	"reRunAble": 1,
   * 	"nodeId": 125803000,
   * 	"nodeName": "new",
   * 	"nodeType": 0,
   * 	"isStop": 0,
   * 	"paraValue": "",
   * 	"startEffectDate": "1970-01-01 00:00:00",
   * 	"endEffectDate": "9999-01-01 00:00:00",
   * 	"cronExpress": "00 26 00 * * ?",
   * 	"owner": "1107550004250000",
   * 	"resgroupId": 6300000,
   * 	"cu": "0.25",
   * 	"appId": 170000,
   * 	"tenantId": 524257424560000,
   * 	"createTime": "2025-04-10 15:55:01",
   * 	"createUser": "1107550004250000",
   * 	"lastModifyTime": "2025-04-10 15:55:41",
   * 	"cycleType": 0,
   * 	"dependentType": 0,
   * 	"dependentTypeList": [0],
   * 	"lastModifyUser": "1107550004250000",
   * 	"dependentDataNode": "",
   * 	"input": "[{\\"regionId\\":\\"cn-hangzhou\\",\\"str\\":\\"root_input\\",\\"parseType\\":1}]",
   * 	"output": "[{\\"str\\":\\"project_root.526586287_out\\",\\"parseType\\":2},{\\"str\\":\\"project_root.new\\",\\"parseType\\":1}]",
   * 	"inputList": [{
   * 		"regionId": "cn-hangzhou",
   * 		"str": "root_input",
   * 		"parseType": 1
   * 	}],
   * 	"outputList": [{
   * 		"str": "project_root.526586287_out",
   * 		"parseType": 2
   * 	}, {
   * 		"str": "project_root.new",
   * 		"parseType": 1
   * 	}],
   * 	"isAutoParse": 1,
   * 	"startRightNow": false,
   * 	"extConfig": "{\\"openCustomCron\\":false,\\"formCron\\":\\"\\"}",
   * 	"inputContextList": [],
   * 	"outputContextList": []
   * }
   */
  nodeConfiguration?: string;
  /**
   * @remarks
   * The node ID in scheduling that corresponds to this file.
   * 
   * @example
   * 700005008419
   */
  nodeId?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 27595
   */
  projectId?: number;
  /**
   * @remarks
   * The testing status in the development environment.
   * 
   * @example
   * Not tested
   */
  smokeTestStatus?: string;
  /**
   * @remarks
   * The status of the code file for this version. Valid values: 
   * - 2: commit check in progress.
   * - 3: commit check succeeded.
   * - 4: commit check rejected.
   * - 10: committing. 
   * - 11: committed to the scheduling development environment. 
   * - 20: review approved.
   * - 21: review failed.
   * - 22: check has warnings.
   * - 23: code review in progress.
   * - 24: code review rejected.
   * - 80: deployment package created. 
   * - 100: deploying. 
   * - 101: deployed to production. 
   * - 200: canceled.
   * 
   * @example
   * 100
   */
  status?: number;
  /**
   * @remarks
   * The DataWorks tenant ID.
   * 
   * @example
   * 639415964191360
   */
  tenantId?: number;
  /**
   * @remarks
   * The functional module to which the file belongs. Valid values:
   * - NORMAL: data development.
   * - MANUAL: manual task.
   * - MANUAL_BIZ: manual workflow.
   * - SKIP: dry-run scheduling in data development.
   * - ADHOCQUERY: ad hoc query.
   * - COMPONENT: component management.
   * 
   * @example
   * NORMAL
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      comment: 'Comment',
      commitTime: 'CommitTime',
      commitUser: 'CommitUser',
      commitUserName: 'CommitUserName',
      fileId: 'FileId',
      fileName: 'FileName',
      fileType: 'FileType',
      fileVersion: 'FileVersion',
      id: 'Id',
      isSameAsProductionVersion: 'IsSameAsProductionVersion',
      nodeConfiguration: 'NodeConfiguration',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
      smokeTestStatus: 'SmokeTestStatus',
      status: 'Status',
      tenantId: 'TenantId',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'number',
      comment: 'string',
      commitTime: 'string',
      commitUser: 'string',
      commitUserName: 'string',
      fileId: 'number',
      fileName: 'string',
      fileType: 'number',
      fileVersion: 'number',
      id: 'number',
      isSameAsProductionVersion: 'boolean',
      nodeConfiguration: 'string',
      nodeId: 'number',
      projectId: 'number',
      smokeTestStatus: 'string',
      status: 'number',
      tenantId: 'number',
      useType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentPackageFilesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The list of file versions pending deployment.
   */
  deploymentPackageFiles?: ListDeploymentPackageFilesResponseBodyPagingInfoDeploymentPackageFiles[];
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries that meet the conditions.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deploymentPackageFiles: 'DeploymentPackageFiles',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentPackageFiles: { 'type': 'array', 'itemType': ListDeploymentPackageFilesResponseBodyPagingInfoDeploymentPackageFiles },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deploymentPackageFiles)) {
      $dara.Model.validateArray(this.deploymentPackageFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentPackageFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListDeploymentPackageFilesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDeploymentPackageFilesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

