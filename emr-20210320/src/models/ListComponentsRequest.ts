// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentsRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * 20
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
   * The number of entries to return on each page.
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
   * ""
   */
  nextToken?: string;
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
  static names(): { [key: string]: string } {
    return {
      applicationNames: 'ApplicationNames',
      clusterId: 'ClusterId',
      componentNames: 'ComponentNames',
      componentStates: 'ComponentStates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
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
      regionId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

