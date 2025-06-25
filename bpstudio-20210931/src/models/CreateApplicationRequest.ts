// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateApplicationRequestInstances } from "./CreateApplicationRequestInstances";


export class CreateApplicationRequest extends $dara.Model {
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
  configuration?: { [key: string]: string };
  /**
   * @remarks
   * The instances in which you want to create the application. You can create applications in an existing virtual private cloud (VPC).
   */
  instances?: CreateApplicationRequestInstances[];
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
  processVariables?: { [key: string]: any };
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
  variables?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      clientToken: 'ClientToken',
      configuration: 'Configuration',
      instances: 'Instances',
      name: 'Name',
      processVariables: 'ProcessVariables',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      clientToken: 'string',
      configuration: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      instances: { 'type': 'array', 'itemType': CreateApplicationRequestInstances },
      name: 'string',
      processVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceGroupId: 'string',
      templateId: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.configuration) {
      $dara.Model.validateMap(this.configuration);
    }
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(this.processVariables) {
      $dara.Model.validateMap(this.processVariables);
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

