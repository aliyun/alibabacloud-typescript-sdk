// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancePackageStatesRequest extends $dara.Model {
  /**
   * @remarks
   * ECS instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1cpoxxxwxxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * Pagination token.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctzxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * List of extension names
   * 
   * @example
   * ["template1","template2"]
   */
  templateNames?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      templateNames: 'TemplateNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      templateNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

