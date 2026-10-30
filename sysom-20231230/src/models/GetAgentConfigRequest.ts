// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the component.
   * 
   * This parameter is required.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  agentId?: string;
  /**
   * @remarks
   * The ID of the component configuration to retrieve.
   * 
   * @example
   * 4d5ecf02-3d01-11f0-8c90-00163e1029af
   */
  configId?: string;
  /**
   * @remarks
   * The name of the configuration.
   * 
   * @example
   * Configuration-x
   */
  configName?: string;
  /**
   * @remarks
   * The current page number. This parameter is available only when pagination by page number is used.
   * 
   * @example
   * 1
   */
  current?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      configId: 'configId',
      configName: 'configName',
      current: 'current',
      pageSize: 'pageSize',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      configId: 'string',
      configName: 'string',
      current: 'string',
      pageSize: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

