// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeClustersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions.
   * 
   * This parameter is required.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * The maximum number of records to return in this response.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. An empty value indicates that no more results are available.
   * 
   * @example
   * fdccfa4f825bf506c591e285f1123403
   */
  nextToken?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      listQueryShrink: 'ListQuery',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQueryShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

