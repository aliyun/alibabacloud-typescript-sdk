// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChartReleaseResponseBodyChartReleases extends $dara.Model {
  /**
   * @remarks
   * The name of the chart version.
   * 
   * @example
   * chart1
   */
  chart?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the chart was last modified.
   * 
   * @example
   * 1571930323000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The version number of the chart.
   * 
   * @example
   * 0.1.0
   */
  release?: string;
  /**
   * @remarks
   * The ID of the chart repository.
   * 
   * @example
   * crcr-gpsu7b8chmxk****
   */
  repoId?: string;
  /**
   * @remarks
   * The size of the chart of the version. Unit: bytes.
   * 
   * @example
   * 2826
   */
  size?: string;
  /**
   * @remarks
   * The status of the chart.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      chart: 'Chart',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      release: 'Release',
      repoId: 'RepoId',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chart: 'string',
      instanceId: 'string',
      modifiedTime: 'number',
      release: 'string',
      repoId: 'string',
      size: 'string',
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

