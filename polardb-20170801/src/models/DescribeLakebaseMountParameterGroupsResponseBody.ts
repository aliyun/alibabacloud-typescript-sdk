// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLakebaseMountParameterGroupsResponseBodyParameterGroups extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2026-08-07T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the parameter template is applied. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  isApply?: string;
  /**
   * @remarks
   * The modification time in UTC.
   * 
   * @example
   * 2026-08-10T12:00:00Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The number of parameters.
   * 
   * @example
   * 10
   */
  parameterCounts?: number;
  /**
   * @remarks
   * The description of the parameter template.
   * 
   * @example
   * Default template
   */
  parameterGroupDesc?: string;
  /**
   * @remarks
   * The parameter template ID.
   * 
   * @example
   * pcpg-lakebase-xxx
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The name of the parameter template.
   * 
   * @example
   * default-template
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * The templatetype. Valid values: 0 (system) and 1 (user).
   * 
   * @example
   * 0
   */
  parameterGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      isApply: 'IsApply',
      modifyTime: 'ModifyTime',
      parameterCounts: 'ParameterCounts',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupId: 'ParameterGroupId',
      parameterGroupName: 'ParameterGroupName',
      parameterGroupType: 'ParameterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      isApply: 'string',
      modifyTime: 'string',
      parameterCounts: 'number',
      parameterGroupDesc: 'string',
      parameterGroupId: 'string',
      parameterGroupName: 'string',
      parameterGroupType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLakebaseMountParameterGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameter templates.
   */
  parameterGroups?: DescribeLakebaseMountParameterGroupsResponseBodyParameterGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F45FFACC-xxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterGroups: 'ParameterGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroups: { 'type': 'array', 'itemType': DescribeLakebaseMountParameterGroupsResponseBodyParameterGroups },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterGroups)) {
      $dara.Model.validateArray(this.parameterGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

