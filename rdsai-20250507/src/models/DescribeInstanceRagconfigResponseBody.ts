// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRAGConfigResponseBodyConfigList extends $dara.Model {
  /**
   * @example
   * LLM_MODEL
   */
  name?: string;
  /**
   * @example
   * qwen-flash
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class DescribeInstanceRAGConfigResponseBody extends $dara.Model {
  configList?: DescribeInstanceRAGConfigResponseBodyConfigList[];
  /**
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      instanceName: 'InstanceName',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: { 'type': 'array', 'itemType': DescribeInstanceRAGConfigResponseBodyConfigList },
      instanceName: 'string',
      requestId: 'string',
      status: 'boolean',
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

