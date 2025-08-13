// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupportResourceTypesResponseBodySupportResourceTypesSupportItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the tag-related capability item is supported. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  support?: boolean;
  /**
   * @remarks
   * The code of the tag-related capability item.
   * 
   * @example
   * TAG_CONSOLE_SUPPORT
   */
  supportCode?: string;
  /**
   * @remarks
   * The details of the support for the tag-related capability item.
   */
  supportDetails?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      support: 'Support',
      supportCode: 'SupportCode',
      supportDetails: 'SupportDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      support: 'boolean',
      supportCode: 'string',
      supportDetails: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.supportDetails)) {
      $dara.Model.validateArray(this.supportDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportResourceTypesResponseBodySupportResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The resource ARN template.
   * 
   * @example
   * acs:ecs:*:*:instance/${ResourceId}
   */
  arnTemplate?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The supported tag-related capability items.
   * 
   * >  This parameter is returned only if the `ShowItems` parameter is set to `true`.
   */
  supportItems?: ListSupportResourceTypesResponseBodySupportResourceTypesSupportItems[];
  static names(): { [key: string]: string } {
    return {
      arnTemplate: 'ArnTemplate',
      productCode: 'ProductCode',
      resourceType: 'ResourceType',
      supportItems: 'SupportItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arnTemplate: 'string',
      productCode: 'string',
      resourceType: 'string',
      supportItems: { 'type': 'array', 'itemType': ListSupportResourceTypesResponseBodySupportResourceTypesSupportItems },
    };
  }

  validate() {
    if(Array.isArray(this.supportItems)) {
      $dara.Model.validateArray(this.supportItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportResourceTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the next query is required.
   * 
   * *   If the value of this parameter is empty, all results are returned, and the next query is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.
   * 
   * @example
   * AAAAAYws9fJ0Ur4MGm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABC71772-F3A1-59CA-B811-4A5B0E0B72F8
   */
  requestId?: string;
  /**
   * @remarks
   * The supported resource types.
   */
  supportResourceTypes?: ListSupportResourceTypesResponseBodySupportResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      supportResourceTypes: 'SupportResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      supportResourceTypes: { 'type': 'array', 'itemType': ListSupportResourceTypesResponseBodySupportResourceTypes },
    };
  }

  validate() {
    if(Array.isArray(this.supportResourceTypes)) {
      $dara.Model.validateArray(this.supportResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

