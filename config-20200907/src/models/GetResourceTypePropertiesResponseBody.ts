// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceTypePropertiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The property descriptions of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *   {
   *     "description": "The ID of the resource group to which the instance belongs.\\n",
   *     "title": "ResourceGroupId",
   *     "type": "String",
   *     "key": "ResourceGroupId",
   *     "example": "rg-bp67acfmxazb4p****"
   *   },
   *   {
   *     "description": "The billing method of the instance. Valid values:\\n\\n*   PrePaid: subscription\\n*   PostPaid: pay-as-you-go\\n",
   *     "title": "InstanceChargeType",
   *     "type": "String",
   *     "key": "InstanceChargeType",
   *     "example": "PostPaid"
   *   }
   * ]
   */
  configuration?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C2868BF-47EE-5441-B34B-17F080B1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

