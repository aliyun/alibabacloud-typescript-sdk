// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentsRequest extends $dara.Model {
  /**
   * @remarks
   * 应用名称列表。
   * 
   * @example
   * 20
   */
  applicationNames?: string[];
  /**
   * @remarks
   * 集群ID。
   * 
   * This parameter is required.
   * 
   * @example
   * C-8CFEBCCFFEF5****
   */
  clusterId?: string;
  /**
   * @remarks
   * 组件名称列表。
   * 
   * @example
   * ["HDFS"]
   */
  componentNames?: string[];
  /**
   * @example
   * null
   */
  componentStates?: string[];
  /**
   * @remarks
   * 一次获取的最大记录数。取值范围：1~100。
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * 标记当前开始读取的位置，置空表示从头开始。
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * 地域ID。
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

