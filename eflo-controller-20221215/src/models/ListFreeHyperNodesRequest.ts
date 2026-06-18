// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFreeHyperNodesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * my_key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 129
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFreeHyperNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @remarks
   * The machine type.
   * 
   * @example
   * efg1.nvga1
   */
  machineType?: string;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 100.
   * 
   * Default value:
   * 
   * • If you do not set this parameter or you set a value less than 20, the default value is 20.
   * 
   * • If you set a value greater than 100, the default value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. Set this parameter to the NextToken value from the previous response.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120****
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzyqdwnfabx6q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * A list of statuses of unused nodes to return.
   */
  status?: string[];
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListFreeHyperNodesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      hpnZone: 'HpnZone',
      machineType: 'MachineType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpnZone: 'string',
      machineType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListFreeHyperNodesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

