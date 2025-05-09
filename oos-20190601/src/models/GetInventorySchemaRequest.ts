// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInventorySchemaRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return only properties that support the aggregate feature in the configuration list. Valid values:
   * 
   * *   true: only returns properties that support the aggregate feature in the configuration list.
   * *   false: returns all properties in the configuration list.
   * 
   * @example
   * false
   */
  aggregator?: boolean;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABfh8MVLQI9AuKGACLgjbsXbWs-Mna47IDM6tr6wK7TZ1
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The configuration list type name. Valid values:
   * 
   * *   ACS:InstanceInformation
   * *   ACS:Application
   * *   ACS:File
   * *   ACS:Network
   * *   ACS:WindowsRole
   * *   ACS:Service
   * *   ACS:WindowsUpdate
   * *   ACS:WindowsRegistry
   * 
   * @example
   * ACS:Application
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      typeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

