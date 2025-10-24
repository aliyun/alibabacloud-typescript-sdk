// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFreeHyperNodesRequestTags extends $dara.Model {
  /**
   * @example
   * my_key
   */
  key?: string;
  /**
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
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @example
   * efg1.nvga1
   */
  machineType?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * a3f2224a5ec7224116c4f5246120****
   */
  nextToken?: string;
  /**
   * @example
   * rg-aekzyqdwnfabx6q
   */
  resourceGroupId?: string;
  status?: string[];
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

