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

