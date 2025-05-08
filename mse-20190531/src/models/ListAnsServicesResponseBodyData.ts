// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnsServicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of clusters.
   * 
   * @example
   * 1
   */
  clusterCount?: number;
  /**
   * @remarks
   * The name of the contact group.
   * 
   * @example
   * name
   */
  groupName?: string;
  /**
   * @remarks
   * The total number of instances with healthy heartbeats.
   * 
   * @example
   * 1
   */
  healthyInstanceCount?: number;
  /**
   * @remarks
   * The total number of instances that are used for the current service.
   * 
   * @example
   * 1
   */
  ipCount?: number;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * name
   */
  name?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      clusterCount: 'ClusterCount',
      groupName: 'GroupName',
      healthyInstanceCount: 'HealthyInstanceCount',
      ipCount: 'IpCount',
      name: 'Name',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCount: 'number',
      groupName: 'string',
      healthyInstanceCount: 'number',
      ipCount: 'number',
      name: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

