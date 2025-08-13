// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupportResourceTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Maximum value: 1000. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResult?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * AAAAAYws9fJ0Ur4MGm/5OkDoW/Y3wDNwUdssyKODK****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The service code. This parameter specifies a filter condition for the query.
   * 
   * This parameter is obtained from the response.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * For more information about region IDs, see [Endpoints](https://help.aliyun.com/document_detail/2330902.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The resource type. This parameter specifies a filter condition for the query.
   * 
   * This parameter is obtained from the response.
   * 
   * @example
   * instance
   */
  resourceTye?: string;
  /**
   * @remarks
   * Specifies whether to return tag-related capability items. Valid values:
   * 
   * *   true: The system returns tag-related capability items.
   * *   false (default value): The system does not return tag-related capability items.
   * 
   * @example
   * false
   */
  showItems?: boolean;
  /**
   * @remarks
   * The code of the tag-related capability item. This parameter specifies a filter condition for the query.
   * 
   * For more information, see **Tag-related capability items**.
   * 
   * @example
   * TAG_CONSOLE_SUPPORT
   */
  supportCode?: string;
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceTye: 'ResourceTye',
      showItems: 'ShowItems',
      supportCode: 'SupportCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      productCode: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceTye: 'string',
      showItems: 'boolean',
      supportCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

