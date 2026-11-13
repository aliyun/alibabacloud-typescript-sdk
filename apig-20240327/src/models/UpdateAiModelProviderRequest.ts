// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAiModelProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The optional default AI service ID. If not empty, it must be a service in the updated association set. Omitting this parameter retains the saved default. An explicit empty string clears the default. A non-empty value sets the default. The value can be up to 64 characters in length.
   * 
   * @example
   * svc-d00000000000000000000
   */
  defaultServiceId?: string;
  /**
   * @remarks
   * The display name of the model provider. This parameter is required and can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Qwen Cloud / Alibaba Cloud Model Studio
   */
  displayName?: string;
  /**
   * @remarks
   * The complete set of AI service IDs to associate with the model provider. If you do not specify this parameter, the existing associations are retained. If you pass an empty array, all associations are cleared. Duplicate and empty values are normalized.
   */
  serviceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      defaultServiceId: 'defaultServiceId',
      displayName: 'displayName',
      serviceIds: 'serviceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultServiceId: 'string',
      displayName: 'string',
      serviceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceIds)) {
      $dara.Model.validateArray(this.serviceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

