// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of component names.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  applicationNames?: string[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * C-8CFEBCCFFEF5****
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of component names.
   * 
   * @example
   * ["HDFS"]
   */
  componentNames?: string[];
  /**
   * @remarks
   * The list of component status.
   * 
   * @example
   * null
   */
  componentStates?: string[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * “”
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of instance IDs.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The instance IDs.
   * 
   * @example
   * 20
   */
  nodeNames?: string[];
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](url) view.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationNames: 'ApplicationNames',
      clusterId: 'ClusterId',
      componentNames: 'ComponentNames',
      componentStates: 'ComponentStates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeIds: 'NodeIds',
      nodeNames: 'NodeNames',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationNames: { 'type': 'array', 'itemType': 'string' },
      clusterId: 'string',
      componentNames: { 'type': 'array', 'itemType': 'string' },
      componentStates: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationNames)) {
      $dara.Model.validateArray(this.applicationNames);
    }
    if(Array.isArray(this.componentNames)) {
      $dara.Model.validateArray(this.componentNames);
    }
    if(Array.isArray(this.componentStates)) {
      $dara.Model.validateArray(this.componentStates);
    }
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

