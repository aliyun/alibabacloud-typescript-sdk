// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The query conditions.
   */
  query?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * For more information about the resource types that are supported by Resource Center, see [Services that work with Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * 
   * @example
   * ACS::ACK::Cluster
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      query: 'Query',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      query: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.query)) {
      $dara.Model.validateArray(this.query);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

