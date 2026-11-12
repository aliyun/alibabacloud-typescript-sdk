// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobScriptHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
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
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 74
   */
  jobId?: number;
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
   * The token that indicates the position from which the current call returns data. An empty value indicates that all data has been read. You do not need to specify this parameter for the first query.
   * 
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobId: 'JobId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      jobId: 'number',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

