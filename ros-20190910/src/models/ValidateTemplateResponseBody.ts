// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ValidateTemplateResponseBodyOutputs } from "./ValidateTemplateResponseBodyOutputs";
import { ValidateTemplateResponseBodyResourceTypes } from "./ValidateTemplateResponseBodyResourceTypes";
import { ValidateTemplateResponseBodyResources } from "./ValidateTemplateResponseBodyResources";
import { ValidateTemplateResponseBodyUpdateInfo } from "./ValidateTemplateResponseBodyUpdateInfo";


export class ValidateTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The outputs of the template.
   */
  outputs?: ValidateTemplateResponseBodyOutputs[];
  /**
   * @remarks
   * The parameters that are defined in the Parameters section of the template.
   */
  parameters?: { [key: string]: any }[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The resource types that are used in the template.
   */
  resourceTypes?: ValidateTemplateResponseBodyResourceTypes;
  /**
   * @remarks
   * The regular resources that are defined in the template.
   * 
   * > - For a Resource Orchestration Service (ROS) template, the resource whose definition contains `Count` is not displayed as a list.
   * > -  For a Terraform template, the resource whose definition contains `count` or `for_each` is not displayed as a list.
   */
  resources?: ValidateTemplateResponseBodyResources[];
  /**
   * @remarks
   * The information about the stack update. This parameter cannot be returned if the value of UpdateInfoOptions contains Disabled.
   */
  updateInfo?: ValidateTemplateResponseBodyUpdateInfo;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      outputs: 'Outputs',
      parameters: 'Parameters',
      requestId: 'RequestId',
      resourceTypes: 'ResourceTypes',
      resources: 'Resources',
      updateInfo: 'UpdateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      outputs: { 'type': 'array', 'itemType': ValidateTemplateResponseBodyOutputs },
      parameters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      resourceTypes: ValidateTemplateResponseBodyResourceTypes,
      resources: { 'type': 'array', 'itemType': ValidateTemplateResponseBodyResources },
      updateInfo: ValidateTemplateResponseBodyUpdateInfo,
    };
  }

  validate() {
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(this.resourceTypes && typeof (this.resourceTypes as any).validate === 'function') {
      (this.resourceTypes as any).validate();
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    if(this.updateInfo && typeof (this.updateInfo as any).validate === 'function') {
      (this.updateInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

