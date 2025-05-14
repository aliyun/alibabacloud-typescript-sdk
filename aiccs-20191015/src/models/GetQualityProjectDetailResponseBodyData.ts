// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityProjectDetailResponseBodyData extends $dara.Model {
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

