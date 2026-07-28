// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to read in this request. Default value: 20. Maximum value: 200.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that marks the position from which to start reading. Leave empty to start from the beginning.
   * 
   * @example
   * s8UVlnE23gZvjCvCwkoZ7Z4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The status of the stack configuration.
   * | Name | Description |
   * |------|------|
   * | Creating | Being created. |
   * | Created | Created. |
   * | Waiting | Waiting for deployment. |
   * | Deploying | Being deployed. |
   * | Deployed | Deployed. |
   * | Errored | Deployment failed. |
   * | Deleting | Being deleted. |
   * | Deleted | Deleted. |
   * | DeleteFailed | Deletion failed. |
   * | DetectTriggered | Drift detection triggered. |.
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The version number of the stack configuration, such as v1. The initial value is v1. The version number increments each time the stack is updated or refreshed and the configuration changes.
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

