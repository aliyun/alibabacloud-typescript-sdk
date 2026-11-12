// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The maximum number of entries to return for this request. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the executor group.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The token that specifies the position from which the current call returns data. An empty value indicates that all data has been read. You do not need to specify this parameter for the first query.
   * 
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of time types.
   * 
   * @example
   * 1
   */
  timeType?: number[];
  /**
   * @remarks
   * The executor type.
   * 
   * @example
   * openclaw
   */
  workerType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      timeType: 'TimeType',
      workerType: 'WorkerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageNum: 'number',
      pageSize: 'number',
      timeType: { 'type': 'array', 'itemType': 'number' },
      workerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.timeType)) {
      $dara.Model.validateArray(this.timeType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

