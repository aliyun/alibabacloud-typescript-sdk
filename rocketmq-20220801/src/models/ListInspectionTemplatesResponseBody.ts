// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInspectionTemplatesResponseBodyDataConfigurationParameters extends $dara.Model {
  /**
   * @example
   * "1h"
   */
  default?: any;
  /**
   * @example
   * ["all","active"]
   */
  enum?: string[];
  /**
   * @example
   * duration
   */
  format?: string;
  /**
   * @example
   * lookback
   */
  key?: string;
  /**
   * @example
   * 3888000
   */
  maxLookbackSeconds?: number;
  /**
   * @example
   * 86400
   */
  maximum?: number;
  /**
   * @example
   * 1
   */
  minimum?: number;
  /**
   * @example
   * 回看时间
   */
  name?: string;
  /**
   * @example
   * true
   */
  required?: boolean;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * seconds
   */
  unit?: string;
  /**
   * @example
   * false
   */
  wholeDays?: boolean;
  static names(): { [key: string]: string } {
    return {
      default: 'default',
      enum: 'enum',
      format: 'format',
      key: 'key',
      maxLookbackSeconds: 'maxLookbackSeconds',
      maximum: 'maximum',
      minimum: 'minimum',
      name: 'name',
      required: 'required',
      type: 'type',
      unit: 'unit',
      wholeDays: 'wholeDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'any',
      enum: { 'type': 'array', 'itemType': 'string' },
      format: 'string',
      key: 'string',
      maxLookbackSeconds: 'number',
      maximum: 'number',
      minimum: 'number',
      name: 'string',
      required: 'boolean',
      type: 'string',
      unit: 'string',
      wholeDays: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.enum)) {
      $dara.Model.validateArray(this.enum);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTemplatesResponseBodyDataConfiguration extends $dara.Model {
  /**
   * @example
   * []
   */
  parameters?: ListInspectionTemplatesResponseBodyDataConfigurationParameters[];
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': ListInspectionTemplatesResponseBodyDataConfigurationParameters },
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTemplatesResponseBodyData extends $dara.Model {
  /**
   * @example
   * {"timeWindow":{"defaultLookback":"1h","maxLookbackSeconds":3888000},"thresholds":[]}
   */
  configuration?: ListInspectionTemplatesResponseBodyDataConfiguration;
  /**
   * @example
   * 检查消息堆积和消费健康度
   */
  description?: string;
  /**
   * @example
   * 队列健康巡检
   */
  name?: string;
  /**
   * @example
   * []
   */
  params?: any;
  /**
   * @example
   * Instance
   */
  scopeType?: string;
  /**
   * @example
   * queue-health
   */
  templateCode?: string;
  /**
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      name: 'name',
      params: 'params',
      scopeType: 'scopeType',
      templateCode: 'templateCode',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ListInspectionTemplatesResponseBodyDataConfiguration,
      description: 'string',
      name: 'string',
      params: 'any',
      scopeType: 'string',
      templateCode: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: ListInspectionTemplatesResponseBodyData[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * eyJvZmZzZXQiOjIwfQ
   */
  nextToken?: string;
  /**
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListInspectionTemplatesResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      total: 'number',
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

