// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceConfigurationSampleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to obtain only mock data, which is not real resource data.
   * Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  mockOnly?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * For more information about how to obtain the resource type, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/169620.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      mockOnly: 'MockOnly',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockOnly: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

