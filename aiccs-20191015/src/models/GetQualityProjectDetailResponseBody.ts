// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityProjectDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Inspection frequency type. Valid values:
   * 
   * - **1**: Periodic quality inspection
   * - **4**: Ad hoc quality inspection
   * 
   * @example
   * 1
   */
  checkFreqType?: number;
  /**
   * @remarks
   * Creation Time.
   * 
   * @example
   * 2021-04-07 18:07:18
   */
  createTime?: string;
  /**
   * @remarks
   * Quality inspection sampling scope.
   */
  depList?: number[];
  /**
   * @remarks
   * Quality inspection sampling scope.
   */
  groupList?: number[];
  /**
   * @remarks
   * Quality inspection job ID.
   * 
   * @example
   * 15977801
   */
  id?: number;
  /**
   * @remarks
   * Updated At.
   * 
   * @example
   * 2021-04-07 18:07:19
   */
  modifyTime?: string;
  /**
   * @remarks
   * Quality inspection job name
   * 
   * @example
   * 自动化质检任务
   */
  projectName?: string;
  /**
   * @remarks
   * Quality inspection rule IDs.
   */
  qualityRuleIds?: number[];
  /**
   * @remarks
   * Quality inspection type. Fixed value: **1** (Consultation).
   * 
   * @example
   * 1
   */
  qualityType?: number;
  /**
   * @remarks
   * Quality inspection sampling scope.
   */
  servicerList?: number[];
  /**
   * @remarks
   * Quality inspection job status. Valid values:  
   * 
   * - **0**: Start  
   * - **1**: Shutdown
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Quality inspection job version number.
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

export class GetQualityProjectDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A return value of 200 indicates that the request succeeded.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Quality inspection job information.
   */
  data?: GetQualityProjectDetailResponseBodyData;
  /**
   * @remarks
   * Status code description.
   * 
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded.
   * 
   * @example
   * true
   */
  success?: string;
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
      data: GetQualityProjectDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

