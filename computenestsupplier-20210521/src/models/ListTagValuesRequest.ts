// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagValuesRequest extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  key?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAfmTH5rcd4YFfob4P0uDAAc=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values: 
   * - service
   * - service instance
   * - artifact
   * 
   * This parameter is required.
   * 
   * @example
   * service
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

