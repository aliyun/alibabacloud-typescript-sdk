// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartConfigRuleEvaluationByResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * For more information about how to obtain the resource ID, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/169620.html).
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp151g9tpto890zr****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

