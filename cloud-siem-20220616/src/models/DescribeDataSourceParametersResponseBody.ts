// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSourceParametersResponseBodyDataParamValue extends $dara.Model {
  /**
   * @remarks
   * The display content.
   * 
   * @example
   * guangzhou
   */
  label?: string;
  /**
   * @remarks
   * The actual parameter content.
   * 
   * @example
   * ap-guangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceParametersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the parameter is editable. Valid values:
   *  - **0**: Modification is disabled. 
   *  - **1**: Modification is allowed.
   * 
   * @example
   * 0
   */
  canEditted?: number;
  /**
   * @remarks
   * The multi-cloud code. Valid values:
   * - **qcloud**: Tencent Cloud.
   * - **aliyun**: Alibaba Cloud.
   * - **hcloud**: Huawei Cloud.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The data source type. Valid values:
   *  - **obs**: Huawei Cloud OBS.
   *  - **wafApi**: Tencent Cloud WAF download API. 
   *  - **ckafka**: Tencent Cloud CKafka.
   * 
   * @example
   * obs
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The default parameter value.
   * 
   * @example
   * wafApi
   */
  defaultValue?: string;
  /**
   * @remarks
   * Indicates whether modification is disabled. Valid values:
   *  - **true**: Modification is disabled. 
   *  - **false**: Modification is allowed.
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * The format validation method.
   * 
   * @example
   * email
   */
  formatCheck?: string;
  /**
   * @remarks
   * The additional description.
   * 
   * @example
   * obs docment
   */
  hit?: string;
  /**
   * @remarks
   * The parameter code.
   * 
   * @example
   * region_code
   */
  paraCode?: string;
  /**
   * @remarks
   * The parameter level. Valid values:
   *  - **1**: Data source parameter.
   * - **2**: Log parameter.
   * 
   * @example
   * 1
   */
  paraLevel?: number;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * region local
   */
  paraName?: string;
  /**
   * @remarks
   * The parameter type.
   * 
   * @example
   * string
   */
  paraType?: string;
  /**
   * @remarks
   * The specific parameter list.
   */
  paramValue?: DescribeDataSourceParametersResponseBodyDataParamValue[];
  /**
   * @remarks
   * Indicates whether the parameter is required. Valid values:
   *  - **1**: Required.
   *  - **0**: Optional.
   * 
   * @example
   * 1
   */
  required?: number;
  /**
   * @remarks
   * The parameter value hint.
   * 
   * @example
   * obs bucket name
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      canEditted: 'CanEditted',
      cloudCode: 'CloudCode',
      dataSourceType: 'DataSourceType',
      defaultValue: 'DefaultValue',
      disabled: 'Disabled',
      formatCheck: 'FormatCheck',
      hit: 'Hit',
      paraCode: 'ParaCode',
      paraLevel: 'ParaLevel',
      paraName: 'ParaName',
      paraType: 'ParaType',
      paramValue: 'ParamValue',
      required: 'Required',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canEditted: 'number',
      cloudCode: 'string',
      dataSourceType: 'string',
      defaultValue: 'string',
      disabled: 'boolean',
      formatCheck: 'string',
      hit: 'string',
      paraCode: 'string',
      paraLevel: 'number',
      paraName: 'string',
      paraType: 'string',
      paramValue: { 'type': 'array', 'itemType': DescribeDataSourceParametersResponseBodyDataParamValue },
      required: 'number',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paramValue)) {
      $dara.Model.validateArray(this.paramValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: DescribeDataSourceParametersResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: { 'type': 'array', 'itemType': DescribeDataSourceParametersResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

