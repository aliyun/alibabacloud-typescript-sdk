// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAiModelProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the model provider. This parameter is required. The name can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Qwen Cloud / Alibaba Cloud Bailian.
   */
  displayName?: string;
  /**
   * @remarks
   * The complete set of AI service IDs to bind to the model provider. If this parameter is not specified, the existing bindings are retained. If an empty array is specified, all bindings are cleared. Duplicate and empty values are normalized.
   */
  serviceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      serviceIds: 'serviceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

