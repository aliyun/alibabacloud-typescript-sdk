// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigsResponseBodyConfigList extends $dara.Model {
  /**
   * @remarks
   * The code of the common configuration item.
   * 
   * @example
   * 1
   */
  code?: string;
  /**
   * @remarks
   * The description of the default value for the common configuration item.
   * 
   * @example
   * The volume of logs of a specific type that are generated on the current day is less than 30% of the average volume of logs generated in the previous 10 days.
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description of the common configuration item.
   * 
   * @example
   * Anomalous log output
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the common configuration item.
   * 
   * @example
   * 2133
   */
  id?: number;
  /**
   * @remarks
   * The value of the common configuration item.
   * 
   * @example
   * 30
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
   * An array that consists of common configuration items for alerts.
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

