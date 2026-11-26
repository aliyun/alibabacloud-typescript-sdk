// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityProjectDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The check frequency type. Valid values:
   * 
   * - **1**: Periodic quality inspection.
   * - **4**: Ad-hoc quality inspection.
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
   * The quality inspection sampling scope.
   */
  depList?: number[];
  /**
   * @remarks
   * The quality inspection sampling scope.
   */
  groupList?: number[];
  /**
   * @remarks
   * The ID of the quality inspection task.
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
   * The name of the quality inspection task.
   * 
   * @example
   * Automated quality inspection task
   */
  projectName?: string;
  /**
   * @remarks
   * The IDs of the quality inspection rules.
   */
  qualityRuleIds?: number[];
  /**
   * @remarks
   * The quality inspection type. The value is fixed to **1** (consulting).
   * 
   * @example
   * 1
   */
  qualityType?: number;
  /**
   * @remarks
   * The quality inspection sampling scope.
   */
  servicerList?: number[];
  /**
   * @remarks
   * The status of the quality inspection task. Valid values:
   * 
   * - **0**: Started.
   * - **1**: Stopped.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The version number of the quality inspection task.
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
   * The status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The quality inspection task information.
   */
  data?: GetQualityProjectDetailResponseBodyData;
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
   * The ID of the request.
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

