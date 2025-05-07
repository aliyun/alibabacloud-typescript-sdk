// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQualityCheckSchemeResponseBodyDataRuleList } from "./ListQualityCheckSchemeResponseBodyDataRuleList";
import { ListQualityCheckSchemeResponseBodyDataSchemeCheckTypeList } from "./ListQualityCheckSchemeResponseBodyDataSchemeCheckTypeList";


export class ListQualityCheckSchemeResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2022-05-10T09:34Z
   */
  createTime?: string;
  createUserName?: string;
  /**
   * @example
   * 1
   */
  dataType?: number;
  description?: string;
  /**
   * @example
   * test
   */
  name?: string;
  ruleList?: ListQualityCheckSchemeResponseBodyDataRuleList[];
  schemeCheckTypeList?: ListQualityCheckSchemeResponseBodyDataSchemeCheckTypeList[];
  /**
   * @example
   * 112**
   */
  schemeId?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1
   */
  templateType?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * 2022-05-10T10:34Z
   */
  updateTime?: string;
  updateUserName?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserName: 'CreateUserName',
      dataType: 'DataType',
      description: 'Description',
      name: 'Name',
      ruleList: 'RuleList',
      schemeCheckTypeList: 'SchemeCheckTypeList',
      schemeId: 'SchemeId',
      status: 'Status',
      templateType: 'TemplateType',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateUserName: 'UpdateUserName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserName: 'string',
      dataType: 'number',
      description: 'string',
      name: 'string',
      ruleList: { 'type': 'array', 'itemType': ListQualityCheckSchemeResponseBodyDataRuleList },
      schemeCheckTypeList: { 'type': 'array', 'itemType': ListQualityCheckSchemeResponseBodyDataSchemeCheckTypeList },
      schemeId: 'number',
      status: 'number',
      templateType: 'number',
      type: 'number',
      updateTime: 'string',
      updateUserName: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    if(Array.isArray(this.schemeCheckTypeList)) {
      $dara.Model.validateArray(this.schemeCheckTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

