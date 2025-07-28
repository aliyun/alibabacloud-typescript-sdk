// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance. Fuzzy search is supported.
   * 
   * @example
   * instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The names of the instances. This parameter is used to specify multiple instances that you want to query at the same time.
   */
  instanceNameListShrink?: string;
  /**
   * @remarks
   * The maximum number of instances that you want to return. Valid values: 0 to 200. If you do not configure this parameter or set this parameter to 0, the default value of 100 is used.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start position of the query. Set this parameter to the value of the NextToken parameter that is returned from the last call. Instances are returned in lexicographical order starting from the position that is specified by this parameter. The first time you call the operation, leave this parameter empty.
   * 
   * @example
   * CAESCG15aC1xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource group ID. You can query the ID on the Resource Group page in the Resource Management console.
   * 
   * @example
   * rg-aek24upgom6p5ri
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      instanceNameListShrink: 'InstanceNameList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      instanceNameListShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

