// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLakebaseMountParameterGroupResponseBodyParameterDetail extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * auto_increment_offset
   */
  parameterName?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * 1
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLakebaseMountParameterGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2026-08-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the parameter template is applied. Valid values: 0: No. 1: Yes.
   * 
   * @example
   * 0
   */
  isApply?: number;
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
   * The details of the parameters in the template. An empty array is returned if no data is available.
   */
  parameterDetail?: DescribeLakebaseMountParameterGroupResponseBodyParameterDetail[];
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
   * The parameter templatetype. Valid values: 0: System. 1: User.
   * 
   * @example
   * 1
   */
  parameterGroupType?: number;
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
      createTime: 'CreateTime',
      isApply: 'IsApply',
      modifyTime: 'ModifyTime',
      parameterDetail: 'ParameterDetail',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupId: 'ParameterGroupId',
      parameterGroupName: 'ParameterGroupName',
      parameterGroupType: 'ParameterGroupType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      isApply: 'number',
      modifyTime: 'string',
      parameterDetail: { 'type': 'array', 'itemType': DescribeLakebaseMountParameterGroupResponseBodyParameterDetail },
      parameterGroupDesc: 'string',
      parameterGroupId: 'string',
      parameterGroupName: 'string',
      parameterGroupType: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterDetail)) {
      $dara.Model.validateArray(this.parameterDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

