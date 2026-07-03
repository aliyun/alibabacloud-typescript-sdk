// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSourceParametersResponseBodyDataParamValue extends $dara.Model {
  /**
   * @remarks
   * The displayed content.
   * 
   * @example
   * guangzhou
   */
  label?: string;
  /**
   * @remarks
   * The actual value of the parameter.
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
   * 
   * - **0**: The parameter cannot be modified.
   * 
   * - **1**: The parameter can be modified.
   * 
   * @example
   * wafApi
   */
  canEditted?: number;
  /**
   * @remarks
   * The code for the multicloud environment. Valid values:
   * 
   * - **qcloud**: Tencent Cloud.
   * 
   * - **aliyun**: Alibaba Cloud.
   * 
   * - **hcloud**: Huawei Cloud.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - **obs**: Huawei Cloud OBS.
   * 
   * - **wafApi**: Tencent Cloud WAF download API.
   * 
   * - **ckafka**: Tencent Cloud CKafka.
   * 
   * @example
   * obs
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * wafApi
   */
  defaultValue?: string;
  /**
   * @remarks
   * Indicates whether the parameter can be modified. Valid values:
   * 
   * - **true**: The parameter cannot be modified.
   * 
   * - **false**: The parameter can be modified.
   * 
   * @example
   * wafApi
   */
  disabled?: boolean;
  /**
   * @remarks
   * The format check method.
   * 
   * @example
   * email
   */
  formatCheck?: string;
  /**
   * @remarks
   * Additional information.
   * 
   * @example
   * obs docment
   */
  hit?: string;
  /**
   * @remarks
   * The code of the parameter.
   * 
   * @example
   * region_code
   */
  paraCode?: string;
  /**
   * @remarks
   * The level of the parameter. Valid values:
   * 
   * - **1**: data source parameter.
   * 
   * - **2**: log parameter.
   * 
   * @example
   * 1
   */
  paraLevel?: number;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * region local
   */
  paraName?: string;
  /**
   * @remarks
   * The type of the parameter.
   * 
   * @example
   * string
   */
  paraType?: string;
  /**
   * @remarks
   * The list of parameters.
   */
  paramValue?: DescribeDataSourceParametersResponseBodyDataParamValue[];
  /**
   * @remarks
   * Indicates whether the parameter is required. Valid values:
   * 
   * - **1**: The parameter is required.
   * 
   * - **0**: The parameter is optional.
   * 
   * @example
   * string
   */
  required?: number;
  /**
   * @remarks
   * The prompt for the parameter value.
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
   * The data returned.
   */
  data?: DescribeDataSourceParametersResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
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

