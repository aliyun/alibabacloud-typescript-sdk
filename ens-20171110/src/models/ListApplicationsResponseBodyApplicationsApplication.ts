// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApplicationsResponseBodyApplicationsApplicationAppList } from "./ListApplicationsResponseBodyApplicationsApplicationAppList";


export class ListApplicationsResponseBodyApplicationsApplication extends $dara.Model {
  /**
   * @remarks
   * Details about the application.
   */
  appList?: ListApplicationsResponseBodyApplicationsApplicationAppList;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * ay-ads-hz-h
   */
  clusterName?: string;
  static names(): { [key: string]: string } {
    return {
      appList: 'AppList',
      clusterName: 'ClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: ListApplicationsResponseBodyApplicationsApplicationAppList,
      clusterName: 'string',
    };
  }

  validate() {
    if(this.appList && typeof (this.appList as any).validate === 'function') {
      (this.appList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

