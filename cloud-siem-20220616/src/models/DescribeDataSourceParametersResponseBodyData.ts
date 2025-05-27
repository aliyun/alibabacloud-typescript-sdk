// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataSourceParametersResponseBodyDataParamValue } from "./DescribeDataSourceParametersResponseBodyDataParamValue";


export class DescribeDataSourceParametersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the edit operation is supported. Valid values:
   * 
   * *   **0**
   * *   **1**
   * 
   * @example
   * wafApi
   */
  canEditted?: number;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   **qcloud**: Tencent Cloud
   * *   **aliyun**: Alibaba Cloud
   * *   **hcloud**: Huawei Cloud
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **obs**: Huawei Cloud Object Storage Service (OBS)
   * *   **wafApi**: download API of Tencent Cloud Web Application Firewall (WAF)
   * *   **ckafka**: Tencent Cloud TDMQ for CKafka
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
   * Indicates whether the modification operation is forbidden. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * wafApi
   */
  disabled?: boolean;
  /**
   * @remarks
   * The method that is used to check the parameter format.
   * 
   * @example
   * email
   */
  formatCheck?: string;
  /**
   * @remarks
   * The additional information.
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
   * The parameter level. Valid values:
   * 
   * *   **1**: the parameters of the data source
   * *   **2**: the parameters of the log
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
   * The data type of the parameter.
   * 
   * @example
   * string
   */
  paraType?: string;
  /**
   * @remarks
   * The value of the parameter.
   */
  paramValue?: DescribeDataSourceParametersResponseBodyDataParamValue[];
  /**
   * @remarks
   * Indicates whether the parameter is required. Valid values:
   * 
   * *   **1**: required
   * *   **0**: optional
   * 
   * @example
   * string
   */
  required?: number;
  /**
   * @remarks
   * The note for the parameter value.
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

