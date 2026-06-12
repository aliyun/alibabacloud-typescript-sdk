// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentInstanceConfigsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * Ownership of the process-level configuration
   * 
   * @example
   * {"workspace": "test-workspace","service": "test-service"}
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * Type of the process-level configuration
   * 
   * @example
   * apm_biz_trace
   */
  configType?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      configType: 'configType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      configType: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentInstanceConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The process-level configurations.
   */
  configs?: ListAgentInstanceConfigsResponseBodyConfigs[];
  /**
   * @remarks
   * The number of data entries.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The total number of data entries that meet the query conditions.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      size: 'size',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListAgentInstanceConfigsResponseBodyConfigs },
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

