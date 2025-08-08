// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityProjectListResponseBodyDataQualityProjectList extends $dara.Model {
  /**
   * @example
   * 1
   */
  checkFreqType?: number;
  /**
   * @example
   * 2021-04-07 18:07:18
   */
  createTime?: string;
  depList?: number[];
  groupList?: number[];
  /**
   * @example
   * 15977801
   */
  id?: number;
  /**
   * @example
   * 2021-04-07 18:07:19
   */
  modifyTime?: string;
  projectName?: string;
  qualityRuleIds?: number[];
  /**
   * @example
   * 1
   */
  qualityType?: number;
  servicerList?: number[];
  /**
   * @example
   * 0
   */
  status?: number;
  /**
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
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  qualityProjectList?: GetQualityProjectListResponseBodyDataQualityProjectList[];
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: GetQualityProjectListResponseBodyData;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
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

