// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the module that you want to access. Valid values:
   * 
   * *   `Registry`: image repositories.
   * *   `Chart`: Helm charts.
   * 
   * @example
   * Chart
   */
  moduleName?: string;
  /**
   * @remarks
   * Specify whether to return endpoints in simple mode. If yes, no access control information about the endpoint is returned.
   * 
   * @example
   * false
   */
  summary?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      moduleName: 'string',
      summary: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

