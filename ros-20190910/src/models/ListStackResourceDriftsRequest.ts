// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackResourceDriftsRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the resource drift detection operation was initiated.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * AAAAAdDWBF2****w==
   */
  nextToken?: string;
  /**
   * @remarks
   * The physical ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource properties as defined in the template, in JSON format.
   * 
   * @example
   * MODIFIED
   */
  resourceDriftStatus?: string[];
  /**
   * @remarks
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceDriftStatus: 'ResourceDriftStatus',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceDriftStatus: { 'type': 'array', 'itemType': 'string' },
      stackId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceDriftStatus)) {
      $dara.Model.validateArray(this.resourceDriftStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

