// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkerInstancesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2023-07-14T20:49:53
   */
  gmtCreate?: string;
  /**
   * @example
   * g_i4katzv***
   */
  id?: string;
  /**
   * @example
   * i4wa71k****
   */
  name?: string;
  /**
   * @example
   * np_4kb18w****
   */
  projectId?: string;
  /**
   * @example
   * j_migration_cloud-kafkavpc-ob
   */
  projectName?: string;
  /**
   * @example
   * MIGRATION
   */
  projectType?: string;
  /**
   * @example
   * null
   */
  region?: string;
  /**
   * @example
   * oms.g2m.small
   */
  spec?: string;
  /**
   * @example
   * ONLINE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectType: 'ProjectType',
      region: 'Region',
      spec: 'Spec',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      id: 'string',
      name: 'string',
      projectId: 'string',
      projectName: 'string',
      projectType: 'string',
      region: 'string',
      spec: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

