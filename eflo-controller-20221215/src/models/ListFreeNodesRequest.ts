// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFreeNodesRequestTags extends $dara.Model {
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

export class ListFreeNodesRequest extends $dara.Model {
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
   * mock-machine-type2
   */
  machineType?: string;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. The default value is 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set it to the NextToken value returned from the previous API call.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of unused nodes to be returned.
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
   * The tag information.
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

