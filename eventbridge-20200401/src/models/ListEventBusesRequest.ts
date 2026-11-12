// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventBusesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return per page. You can use this parameter together with NextToken to implement pagination.
   * 
   * >Notice: The maximum number of entries returned per request is 100.</notice>
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The name prefix of the event buses to retrieve.
   * 
   * @example
   * My
   */
  namePrefix?: string;
  /**
   * @remarks
   * The pagination token. If the specified Limit is reached and more results are available, this token is returned. You can use this token together with Limit to implement pagination.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group, used to filter event buses in the specified resource group.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      namePrefix: 'NamePrefix',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      namePrefix: 'string',
      nextToken: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

