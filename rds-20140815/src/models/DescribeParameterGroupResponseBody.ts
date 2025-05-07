// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParameterGroupResponseBodyParamGroup } from "./DescribeParameterGroupResponseBodyParamGroup";
import { DescribeParameterGroupResponseBodyRelatedCustinsInfo } from "./DescribeParameterGroupResponseBodyRelatedCustinsInfo";


export class DescribeParameterGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the parameter template.
   */
  paramGroup?: DescribeParameterGroupResponseBodyParamGroup;
  /**
   * @remarks
   * The information about the instance to which the parameter template is applied.
   * 
   * >  This parameter is available only for ApsaraDB RDS for PostgreSQL instances.
   */
  relatedCustinsInfo?: DescribeParameterGroupResponseBodyRelatedCustinsInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 498AE8CA-8C81-4A01-AF37-2B902014ED30
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      paramGroup: 'ParamGroup',
      relatedCustinsInfo: 'RelatedCustinsInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramGroup: DescribeParameterGroupResponseBodyParamGroup,
      relatedCustinsInfo: DescribeParameterGroupResponseBodyRelatedCustinsInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.paramGroup && typeof (this.paramGroup as any).validate === 'function') {
      (this.paramGroup as any).validate();
    }
    if(this.relatedCustinsInfo && typeof (this.relatedCustinsInfo as any).validate === 'function') {
      (this.relatedCustinsInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

