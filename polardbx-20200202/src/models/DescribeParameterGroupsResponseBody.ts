// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupsResponseBodyDataParameterGroups extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a forced restart of CN is required.
   */
  cnForceRestart?: boolean;
  /**
   * @remarks
   * The number of CN parameters.
   * 
   * @example
   * 10
   */
  cnParamCount?: number;
  /**
   * @remarks
   * The database type.
   * 
   * @example
   * polarx
   */
  dbType?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 5.7
   */
  dbVersion?: string;
  /**
   * @remarks
   * Indicates whether a forced restart of DN is required.
   */
  dnForceRestart?: boolean;
  /**
   * @remarks
   * The number of DN parameters.
   * 
   * @example
   * 10
   */
  dnParamCount?: number;
  /**
   * @remarks
   * The time when the account was created.
   * 
   * @example
   * 2024-12-19T16:41:31+08:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The modification time, in timestamp format.
   * 
   * @example
   * 1605079985000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The parameter template ID.
   * > You can call the [DescribeParameterGroups](https://help.aliyun.com/document_detail/207178.html) operation to query the details of all parameter templates in the specified region, including the parameter template ID.
   * 
   * @example
   * rpg-s1y1xy06****fqs7y
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The parameter template name.
   * 
   * @example
   * dstest_api_new
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * The parameter templatetype.
   * 
   * @example
   * 0
   */
  parameterGroupType?: string;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * - **enterprise**: Enterprise Edition.
   * - **standard**: Standard Edition.
   * 
   * @example
   * enterprise
   */
  series?: string;
  static names(): { [key: string]: string } {
    return {
      cnForceRestart: 'CnForceRestart',
      cnParamCount: 'CnParamCount',
      dbType: 'DbType',
      dbVersion: 'DbVersion',
      dnForceRestart: 'DnForceRestart',
      dnParamCount: 'DnParamCount',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      parameterGroupId: 'ParameterGroupId',
      parameterGroupName: 'ParameterGroupName',
      parameterGroupType: 'ParameterGroupType',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnForceRestart: 'boolean',
      cnParamCount: 'number',
      dbType: 'string',
      dbVersion: 'string',
      dnForceRestart: 'boolean',
      dnParamCount: 'number',
      gmtCreated: 'string',
      gmtModified: 'string',
      parameterGroupId: 'string',
      parameterGroupName: 'string',
      parameterGroupType: 'string',
      series: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The parameter template name.
   */
  parameterGroups?: DescribeParameterGroupsResponseBodyDataParameterGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1E5DCFFC-A00D-****-836E-73318F8CA577
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
      parameterGroups: { 'type': 'array', 'itemType': DescribeParameterGroupsResponseBodyDataParameterGroups },
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

export class DescribeParameterGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance details.
   */
  data?: DescribeParameterGroupsResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9B2F3840-5C98-475C-B269-2D5C3A31797C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeParameterGroupsResponseBodyData,
      requestId: 'string',
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

