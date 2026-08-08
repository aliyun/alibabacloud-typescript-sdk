// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrossAccountsRequest extends $dara.Model {
  /**
   * @example
   * 123***7890
   */
  crossAccountOwnerId?: number;
  /**
   * @example
   * MANUAL
   */
  managementMode?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * cae**********699
   */
  nextToken?: string;
  /**
   * @example
   * 123***7890
   */
  targetId?: string;
  /**
   * @example
   * ACCOUNT
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccountOwnerId: 'CrossAccountOwnerId',
      managementMode: 'ManagementMode',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountOwnerId: 'number',
      managementMode: 'string',
      maxResults: 'number',
      nextToken: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

