// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RelieveAccountRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as the member. You must set the RelationId parameter or all of the ParentUserId, ChildUserId, and RelationType parameters.
   * 
   * @example
   * 1512996702208737
   */
  childUserId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as the management account. You must set the RelationId parameter or all of the ParentUserId, ChildUserId, and RelationType parameters.
   * 
   * @example
   * 1738376485192612
   */
  parentUserId?: number;
  /**
   * @remarks
   * The ID of the financial relationship between the management account and the member. You must set the RelationId parameter or all of the ParentUserId, ChildUserId, and RelationType parameters.
   * 
   * @example
   * RelationId
   */
  relationId?: number;
  /**
   * @remarks
   * The type of the financial relationship. Set the value to enterprise_group.
   * 
   * @example
   * enterprise_group
   */
  relationType?: string;
  /**
   * @remarks
   * The unique ID of the request. The ID is used to mark a request and troubleshoot a problem.
   * 
   * This parameter is required.
   * 
   * @example
   * request_id
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      childUserId: 'ChildUserId',
      parentUserId: 'ParentUserId',
      relationId: 'RelationId',
      relationType: 'RelationType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childUserId: 'number',
      parentUserId: 'number',
      relationId: 'number',
      relationType: 'string',
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

