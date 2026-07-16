// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteTrafficSequenceResponseBodyTrafficSequencesFunctionListConfigs extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 480339095269376
   */
  configId?: number;
  /**
   * @remarks
   * The configuration type. Valid values:
   * - global: global configuration.
   * - rule: rule configuration.
   * 
   * @example
   * global
   */
  configType?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configType: 'ConfigType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      configType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteTrafficSequenceResponseBodyTrafficSequencesFunctionList extends $dara.Model {
  /**
   * @remarks
   * The list of configurations for the site feature associated with the traffic sequence.
   * 
   * This parameter is required.
   * 
   * **if can be null:**
   * true
   */
  configs?: GetSiteTrafficSequenceResponseBodyTrafficSequencesFunctionListConfigs[];
  /**
   * @remarks
   * The feature name.
   * 
   * @example
   * redirect_rules
   */
  functionName?: string;
  /**
   * @remarks
   * Indicates whether the site has a corresponding configuration. Valid values:
   * - true: The site has a corresponding configuration.
   * - false: The site does not have a corresponding configuration.
   * 
   * @example
   * true
   */
  hasConfig?: boolean;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      functionName: 'FunctionName',
      hasConfig: 'HasConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': GetSiteTrafficSequenceResponseBodyTrafficSequencesFunctionListConfigs },
      functionName: 'string',
      hasConfig: 'boolean',
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

export class GetSiteTrafficSequenceResponseBodyTrafficSequences extends $dara.Model {
  /**
   * @remarks
   * The list of site features associated with the traffic sequence.
   */
  functionList?: GetSiteTrafficSequenceResponseBodyTrafficSequencesFunctionList[];
  /**
   * @remarks
   * The order of the current sequence in the entire traffic sequence.
   * 
   * @example
   * 1
   */
  order?: string;
  /**
   * @remarks
   * The traffic sequence routing.
   * 
   * @example
   * /safe/ddos/basic
   */
  router?: string;
  /**
   * @remarks
   * The sequence code.
   * 
   * @example
   * ddos
   */
  sequenceCode?: string;
  /**
   * @remarks
   * The sequence name.
   * 
   * @example
   * DDOS
   */
  sequenceName?: string;
  static names(): { [key: string]: string } {
    return {
      functionList: 'FunctionList',
      order: 'Order',
      router: 'Router',
      sequenceCode: 'SequenceCode',
      sequenceName: 'SequenceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionList: { 'type': 'array', 'itemType': GetSiteTrafficSequenceResponseBodyTrafficSequencesFunctionList },
      order: 'string',
      router: 'string',
      sequenceCode: 'string',
      sequenceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.functionList)) {
      $dara.Model.validateArray(this.functionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteTrafficSequenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The traffic sequences of the site.
   */
  trafficSequences?: GetSiteTrafficSequenceResponseBodyTrafficSequences[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficSequences: 'TrafficSequences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficSequences: { 'type': 'array', 'itemType': GetSiteTrafficSequenceResponseBodyTrafficSequences },
    };
  }

  validate() {
    if(Array.isArray(this.trafficSequences)) {
      $dara.Model.validateArray(this.trafficSequences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

