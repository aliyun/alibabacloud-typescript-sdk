// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFreeNodesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key_aa
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value_aa
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

export class ListFreeNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster number.
   * 
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * mock-machine-type2
   */
  machineType?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start position of the query. Set this parameter to the value of the NextToken parameter that is returned from the last call.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @remarks
   * The types of the returned nodes that are not used.
   */
  operatingStates?: string[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxno4vh5muoq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListFreeNodesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      hpnZone: 'HpnZone',
      machineType: 'MachineType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      operatingStates: 'OperatingStates',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpnZone: 'string',
      machineType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      operatingStates: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListFreeNodesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.operatingStates)) {
      $dara.Model.validateArray(this.operatingStates);
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

