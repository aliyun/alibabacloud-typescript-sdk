// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupAgentModelSettingsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The model group ID.
   * 
   * @example
   * mt-xxxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * The model group name.
   * 
   * @example
   * Default model group
   */
  modelTemplateName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      modelTemplateId: 'ModelTemplateId',
      modelTemplateName: 'ModelTemplateName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelTemplateId: 'string',
      modelTemplateName: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupAgentModelSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of model settings for resource groups. One record is returned for each resource group ID specified in the request. If a resource group is not associated with a model group under the specified agent platform and provider, ModelTemplateId and ModelTemplateName are empty.
   */
  data?: GetResourceGroupAgentModelSettingsResponseBodyData[];
  /**
   * @remarks
   * The request ID, which uniquely identifies the request.
   * 
   * @example
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetResourceGroupAgentModelSettingsResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
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

