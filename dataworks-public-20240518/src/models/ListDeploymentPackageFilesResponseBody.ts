// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentPackageFilesResponseBodyPagingInfoDeploymentPackageFiles extends $dara.Model {
  /**
   * @remarks
   * The change type, which is an integer. Valid values:
   * 
   * *   0: addition
   * *   1: update
   * *   2: deletion
   * 
   * @example
   * 0
   */
  changeType?: number;
  /**
   * @remarks
   * The comment for committing.
   */
  comment?: string;
  /**
   * @remarks
   * The time for committing.
   * 
   * @example
   * 2025-04-10 15:55:47
   */
  commitTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the user who committed the file.
   * 
   * @example
   * 446***
   */
  commitUser?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account used by the user who committed the file.
   * 
   * @example
   * user***
   */
  commitUserName?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 520246913
   */
  fileId?: number;
  /**
   * @remarks
   * The name of the file of the current version.
   * 
   * @example
   * bak_part_basc_person_relation_all_da
   */
  fileName?: string;
  /**
   * @remarks
   * The file type. The code for files varies based on the file type. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 13
   */
  fileType?: number;
  /**
   * @remarks
   * The file version.
   * 
   * @example
   * 34
   */
  fileVersion?: number;
  /**
   * @remarks
   * The unique ID.
   * 
   * @example
   * 650433503
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the version is a version in the production environment of the scheduling system.
   * 
   * @example
   * true
   */
  isSameAsProductionVersion?: boolean;
  /**
   * @remarks
   * The scheduling property configurations of the node that corresponds to the file, which is a JSON string.
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
   * The ID of the auto triggered node that corresponds to the file.
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
   * The test status in the development environment.
   */
  smokeTestStatus?: string;
  /**
   * @remarks
   * The status of the code file of the current version. Valid values:
   * 
   * *   2: Commit check in progress.
   * *   3: Commit check passed.
   * *   4: Commit check failed.
   * *   10: Committing.
   * *   11: Committed.
   * *   20: Approved.
   * *   21: Rejected.
   * *   22: Warning detected during checking.
   * *   23: Under code review.
   * *   24: Code review rejected.
   * *   80: Deployment package created.
   * *   100: Deploying.
   * *   101: Deployed to the production environment.
   * *   200: Cancelled.
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
   * The module to which the file belongs. Valid values:
   * 
   * *   NORMAL: The file is used for DataStudio.
   * *   MANUAL: The file is used for a manually triggered node.
   * *   MANUAL_BIZ: The file is used for a manually triggered workflow.
   * *   SKIP: The file is used for a dry-run node in DataStudio.
   * *   ADHOCQUERY: The file is used for an ad hoc query.
   * *   COMPONENT: The file is used for a script template.
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
   * The list of files pending deployment.
   */
  deploymentPackageFiles?: ListDeploymentPackageFilesResponseBodyPagingInfoDeploymentPackageFiles[];
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
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
   * The pagination details.
   */
  pagingInfo?: ListDeploymentPackageFilesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
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

