// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupsResponseBodyDataParameterGroups extends $dara.Model {
  cnForceRestart?: boolean;
  /**
   * @example
   * 10
   */
  cnParamCount?: number;
  /**
   * @example
   * polarx
   */
  dbType?: string;
  /**
   * @example
   * 5.7
   */
  dbVersion?: string;
  dnForceRestart?: boolean;
  /**
   * @example
   * 10
   */
  dnParamCount?: number;
  /**
   * @example
   * 2024-12-19T16:41:31+08:00
   */
  gmtCreated?: string;
  /**
   * @example
   * 1605079985000
   */
  gmtModified?: string;
  /**
   * @example
   * rpg-s1y1xy06****fqs7y
   */
  parameterGroupId?: string;
  /**
   * @example
   * dstest_api_new
   */
  parameterGroupName?: string;
  /**
   * @example
   * 0
   */
  parameterGroupType?: string;
  /**
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
  parameterGroups?: DescribeParameterGroupsResponseBodyDataParameterGroups[];
  /**
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

