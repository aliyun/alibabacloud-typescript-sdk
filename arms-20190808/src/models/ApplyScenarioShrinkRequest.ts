// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyScenarioShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * b590lhguqs@28f515462f******
   */
  appId?: string;
  /**
   * @remarks
   * The configuration of the business monitoring job. The value is a JSON string. For more information about this parameter, see the following additional information about the **Config** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * {"rpcType":"0","nameMatchType":"EQUALS","service":"/api/pop/test","operator":"and","filterItems":[{"type":"HttpHeaders","key":"uid","opt":"==","value":"123456789"}],"group":{"type":"HttpRequestParameters","key":"name"}}
   */
  configShrink?: string;
  /**
   * @remarks
   * The name of the business monitoring job.
   * 
   * This parameter is required.
   * 
   * @example
   * ScenarioName
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-zhangjaikou
   */
  regionId?: string;
  /**
   * @remarks
   * The scenario where you want to use the business monitoring job. Valid values:
   * 
   * *   `USER-DEFINED`: user-defined. This is the default value.
   * *   `EDAS-ROLLOUT`: application release in Enterprise Distributed Application Service (EDAS)
   * *   `OAM-ROLLOUT`: application release based on Open Application Model (OAM)
   * *   `MSC-CANARY`: canary release based on Microservice Engine (MSE)
   * 
   * @example
   * USER-DEFINED
   */
  scenario?: string;
  /**
   * @remarks
   * The code of the business monitoring job. This parameter is not required when you create a business monitoring job. However, this parameter is required when you update a business monitoring job.
   * 
   * @example
   * a9f8****
   */
  sign?: string;
  /**
   * @remarks
   * Specifies whether to record business parameters to the trace marked with the coloring sign.
   * 
   * *   `true`
   * *   `false`: This is the default value.
   * 
   * @example
   * false
   */
  snDump?: boolean;
  /**
   * @remarks
   * Specifies whether traffic in the trace marked with the coloring sign is all collected.
   * 
   * *   `true`
   * *   `false`: This is the default value.
   * 
   * @example
   * false
   */
  snForce?: boolean;
  /**
   * @remarks
   * Specifies whether to count traffic based on the coloring sign.
   * 
   * *   `true`
   * *   `false`: This is the default value.
   * 
   * @example
   * false
   */
  snStat?: boolean;
  /**
   * @remarks
   * Specifies whether the coloring sign is transparently passed down to downstream application nodes in the trace.
   * 
   * *   `true`
   * *   `false`: This is the default value.
   * 
   * @example
   * false
   */
  snTransfer?: boolean;
  /**
   * @remarks
   * Specifies whether the operation is an update operation.
   * 
   * *   `true`: update
   * *   `false`: insert
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  updateOption?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      configShrink: 'Config',
      name: 'Name',
      regionId: 'RegionId',
      scenario: 'Scenario',
      sign: 'Sign',
      snDump: 'SnDump',
      snForce: 'SnForce',
      snStat: 'SnStat',
      snTransfer: 'SnTransfer',
      updateOption: 'UpdateOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      configShrink: 'string',
      name: 'string',
      regionId: 'string',
      scenario: 'string',
      sign: 'string',
      snDump: 'boolean',
      snForce: 'boolean',
      snStat: 'boolean',
      snTransfer: 'boolean',
      updateOption: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

