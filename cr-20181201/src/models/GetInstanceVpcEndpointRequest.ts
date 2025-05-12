// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceVpcEndpointRequest extends $dara.Model {
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
   * *   `Registry`: the image repository.
   * *   `Chart`: a Helm chart.
   * 
   * @example
   * Chart
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

