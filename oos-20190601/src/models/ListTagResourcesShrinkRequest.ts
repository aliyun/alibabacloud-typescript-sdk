// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of resources. The number of resource IDs ranges from 1 to 50.
   * 
   * @example
   * ["templateNam1","templateName2"]
   */
  resourceIdsShrink?: string;
  /**
   * @remarks
   * The type of the resource. Valid values: template execution
   * 
   * This parameter is required.
   * 
   * @example
   * template
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"v2","k2":"v2"}
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceIdsShrink: 'ResourceIds',
      resourceType: 'ResourceType',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceIdsShrink: 'string',
      resourceType: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

