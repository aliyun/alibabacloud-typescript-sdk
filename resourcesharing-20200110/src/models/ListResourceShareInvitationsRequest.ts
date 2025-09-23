// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceShareInvitationsRequest extends $dara.Model {
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
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The IDs of the resource shares.
   */
  resourceShareIds?: string[];
  /**
   * @remarks
   * The IDs of the resource sharing invitations.
   */
  resourceShareInvitationIds?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceShareIds: 'ResourceShareIds',
      resourceShareInvitationIds: 'ResourceShareInvitationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceShareIds: { 'type': 'array', 'itemType': 'string' },
      resourceShareInvitationIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceShareIds)) {
      $dara.Model.validateArray(this.resourceShareIds);
    }
    if(Array.isArray(this.resourceShareInvitationIds)) {
      $dara.Model.validateArray(this.resourceShareInvitationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

