// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  areaId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * The parameters that are used to configure the application you want to create. For example, enableMonitor specifies whether to automatically create a CloudMonitor task for the application, and enableReport specifies whether to generate reports.
   * 
   * @example
   * {"enableMonitor":"0", "enableReport":"1"}
   */
  configurationShrink?: string;
  /**
   * @remarks
   * The instances in which you want to create the application. You can create applications in an existing virtual private cloud (VPC).
   */
  instancesShrink?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * *   The application name must be unique. You can call the [ListApplication](https://www.alibabacloud.com/help/en/bp-studio/latest/api-bpstudio-2021-09-31-listapplication) operation to query the existing applications.
   * *   The application name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http:// or https://`. The name can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * cadt-application
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group to which the application you want to create belongs.
   * 
   * @example
   * rg-acfmyjt3c5om3hi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * 0KSHPM6SJU03TNZP
   */
  templateId?: string;
  /**
   * @remarks
   * The parameter values that are contained in the template. If the template contains no parameter values, the default values are used.
   * 
   * @example
   * {"variable1":"1"}
   */
  variablesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      clientToken: 'ClientToken',
      configurationShrink: 'Configuration',
      instancesShrink: 'Instances',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
      variablesShrink: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      clientToken: 'string',
      configurationShrink: 'string',
      instancesShrink: 'string',
      name: 'string',
      resourceGroupId: 'string',
      templateId: 'string',
      variablesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

