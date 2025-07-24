// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * HDFS
   */
  applicationName?: string;
  /**
   * @remarks
   * The status of the applications. Valid values:
   * 
   * *   STOPPED: At least one application is in the Stopped state.
   * *   RUNNING: All applications are in the Running state.
   * 
   * This parameter is returned only for DataLake, OLAP, Dataflow, DataServing, and custom clusters. For other types of clusters, no value is returned for this parameter.
   * 
   * @example
   * RUNNING
   */
  applicationState?: string;
  /**
   * @remarks
   * The version of the application.
   * 
   * @example
   * 2.8.1
   * 
   * @deprecated
   */
  applicationVersion?: string;
  /**
   * @remarks
   * The community edition.
   * 
   * @example
   * 2.8.5
   */
  communityVersion?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      applicationState: 'ApplicationState',
      applicationVersion: 'ApplicationVersion',
      communityVersion: 'CommunityVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      applicationState: 'string',
      applicationVersion: 'string',
      communityVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The applications.
   */
  applications?: ListApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The page number of the next page returned.
   * 
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E3A7161-EB7B-172B-8D18-FFB06BA3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplications },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

