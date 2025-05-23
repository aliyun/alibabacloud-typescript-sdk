// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentPackageFilesResponseBodyPagingInfoDeploymentPackageFiles extends $dara.Model {
  /**
   * @example
   * 0
   */
  changeType?: number;
  comment?: string;
  /**
   * @example
   * 2025-04-10 15:55:47
   */
  commitTime?: string;
  /**
   * @example
   * 446***
   */
  commitUser?: string;
  /**
   * @example
   * user***
   */
  commitUserName?: string;
  /**
   * @example
   * 520246913
   */
  fileId?: number;
  /**
   * @example
   * bak_part_basc_person_relation_all_da
   */
  fileName?: string;
  /**
   * @example
   * 13
   */
  fileType?: number;
  /**
   * @example
   * 34
   */
  fileVersion?: number;
  /**
   * @example
   * 650433503
   */
  id?: number;
  /**
   * @example
   * true
   */
  isSameAsProductionVersion?: boolean;
  /**
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
   * @example
   * 700005008419
   */
  nodeId?: number;
  /**
   * @example
   * 27595
   */
  projectId?: number;
  smokeTestStatus?: string;
  /**
   * @example
   * 100
   */
  status?: number;
  /**
   * @example
   * 639415964191360
   */
  tenantId?: number;
  /**
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

