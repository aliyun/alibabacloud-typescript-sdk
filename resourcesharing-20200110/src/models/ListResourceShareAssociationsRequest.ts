// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceShareAssociationsRequest extends $dara.Model {
  /**
   * @remarks
   * The association status. Valid values:
   * 
   * *   Associating: The entity is being associated.
   * *   Associated: The entity is associated.
   * *   Failed: The entity fails to be associated.
   * *   Disassociating: The entity is being disassociated.
   * *   Disassociated: The entity is disassociated.
   * 
   * >  The system deletes the records of entities in the `Failed` or `Disassociated` state within 48 hours to 96 hours.
   * 
   * @example
   * Associated
   */
  associationStatus?: string;
  /**
   * @remarks
   * The association type. Valid values:
   * 
   * *   Resource
   * *   Target
   * 
   * This parameter is required.
   * 
   * @example
   * Resource
   */
  associationType?: string;
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The `token` that is used to initiate the next request if the response of the current request is truncated. You can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  resourceArn?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * >  This parameter is unavailable if you set the `AssociationType` parameter to `Target`.
   * 
   * @example
   * vsw-bp183p93qs667muql****
   */
  resourceId?: string;
  /**
   * @remarks
   * The IDs of the resource shares.
   * 
   * Valid values of N: 1 to 5. This indicates that a maximum of five resource shares can be specified at a time.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareIds?: string[];
  /**
   * @remarks
   * The ID of the principal.
   * 
   * >  This parameter is unavailable if you set the `AssociationType` parameter to `Resource`.
   * 
   * @example
   * 172050525300****
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      associationStatus: 'AssociationStatus',
      associationType: 'AssociationType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceArn: 'ResourceArn',
      resourceId: 'ResourceId',
      resourceShareIds: 'ResourceShareIds',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationStatus: 'string',
      associationType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceArn: 'string',
      resourceId: 'string',
      resourceShareIds: { 'type': 'array', 'itemType': 'string' },
      target: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceShareIds)) {
      $dara.Model.validateArray(this.resourceShareIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

