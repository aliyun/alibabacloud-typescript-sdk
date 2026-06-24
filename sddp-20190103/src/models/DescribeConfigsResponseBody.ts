// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigsResponseBodyConfigList extends $dara.Model {
  /**
   * @remarks
   * The code of the configuration item.
   * 
   * @example
   * abnormal_download_file
   */
  code?: string;
  /**
   * @remarks
   * The default value of the configuration item.
   * 
   * @example
   * 10000
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description of the configuration item.
   * 
   * @example
   * Unauthorized resource multiple access attempts: current threshold is defined as 10 attempts
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the configuration item.
   * 
   * @example
   * 50
   */
  id?: number;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * 10000
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      defaultValue: 'DefaultValue',
      description: 'Description',
      id: 'Id',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      defaultValue: 'string',
      description: 'string',
      id: 'number',
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

export class DescribeConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of common configuration items for anomaly alerts.
   */
  configList?: DescribeConfigsResponseBodyConfigList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: { 'type': 'array', 'itemType': DescribeConfigsResponseBodyConfigList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configList)) {
      $dara.Model.validateArray(this.configList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

