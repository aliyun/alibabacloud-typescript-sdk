// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityProjectListResponseBodyDataQualityProjectList extends $dara.Model {
  /**
   * @remarks
   * The frequency of the quality check task.
   * 
   * @example
   * 1
   */
  checkFreqType?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-04-07 18:07:18
   */
  createTime?: string;
  /**
   * @remarks
   * The sampling scope of the quality check.
   */
  depList?: number[];
  /**
   * @remarks
   * The sampling scope of the quality check.
   */
  groupList?: number[];
  /**
   * @remarks
   * The ID of the quality check task.
   * 
   * @example
   * 15977801
   */
  id?: number;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-04-07 18:07:19
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the quality check task.
   * 
   * @example
   * Automated quality check task
   */
  projectName?: string;
  /**
   * @remarks
   * The IDs of the quality check rules.
   */
  qualityRuleIds?: number[];
  /**
   * @remarks
   * The quality check type. Fixed value: **1** (Consulting).
   * 
   * @example
   * 1
   */
  qualityType?: number;
  /**
   * @remarks
   * The sampling scope of the quality check.
   */
  servicerList?: number[];
  /**
   * @remarks
   * The status of the quality check task.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The version number of the quality check task.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      checkFreqType: 'CheckFreqType',
      createTime: 'CreateTime',
      depList: 'DepList',
      groupList: 'GroupList',
      id: 'Id',
      modifyTime: 'ModifyTime',
      projectName: 'ProjectName',
      qualityRuleIds: 'QualityRuleIds',
      qualityType: 'QualityType',
      servicerList: 'ServicerList',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkFreqType: 'number',
      createTime: 'string',
      depList: { 'type': 'array', 'itemType': 'number' },
      groupList: { 'type': 'array', 'itemType': 'number' },
      id: 'number',
      modifyTime: 'string',
      projectName: 'string',
      qualityRuleIds: { 'type': 'array', 'itemType': 'number' },
      qualityType: 'number',
      servicerList: { 'type': 'array', 'itemType': 'number' },
      status: 'number',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depList)) {
      $dara.Model.validateArray(this.depList);
    }
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    if(Array.isArray(this.qualityRuleIds)) {
      $dara.Model.validateArray(this.qualityRuleIds);
    }
    if(Array.isArray(this.servicerList)) {
      $dara.Model.validateArray(this.servicerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
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
   * The list of quality check tasks.
   */
  qualityProjectList?: GetQualityProjectListResponseBodyDataQualityProjectList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 35
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualityProjectList: 'QualityProjectList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      qualityProjectList: { 'type': 'array', 'itemType': GetQualityProjectListResponseBodyDataQualityProjectList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qualityProjectList)) {
      $dara.Model.validateArray(this.qualityProjectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The quality check task information.
   */
  data?: GetQualityProjectListResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful.
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
      code: 'string',
      data: GetQualityProjectListResponseBodyData,
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

