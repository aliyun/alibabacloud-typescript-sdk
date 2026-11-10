// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return for the current query. Default value: 20. Maximum value: 200.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that specifies the starting position for the query. If this parameter is left empty, the query starts from the beginning.
   * 
   * @example
   * s8UVlnE23gZvjCvCwkoZ7Z4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The status of the stack configuration. Valid values:
   * | Name | Description |
   * |------|-------------|
   * | Creating | Creating |
   * | Created | Created |
   * | Waiting | Waiting for deployment |
   * | Deploying | Deploying |
   * | Deployed | Deployed |
   * | Errored | Deployment failed |
   * | Deleting | Deleting |
   * | Deleted | Deleted |
   * | DeleteFailed | Deletion failed |
   * | DetectTriggered | Drift detection triggered successfully |
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The version number of the stack configuration, such as v1. The initial value is v1. The version number increments each time the stack is updated or refreshed and the configuration is changed.
   * 
   * @example
   * v4
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

