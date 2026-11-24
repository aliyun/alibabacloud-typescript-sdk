// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChartReleaseResponseBodyChartReleases extends $dara.Model {
  /**
   * @remarks
   * The chart version name.
   * 
   * @example
   * chart1
   */
  chart?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the chart was last modified. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1571930323000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The chart version number.
   * 
   * @example
   * 0.1.0
   */
  release?: string;
  /**
   * @remarks
   * The chart repository ID.
   * 
   * @example
   * crcr-gpsu7b8chmxk****
   */
  repoId?: string;
  /**
   * @remarks
   * The size of the chart version, in bytes.
   * 
   * @example
   * 2826
   */
  size?: string;
  /**
   * @remarks
   * The status.
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

export class ListChartReleaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of chart versions.
   */
  chartReleases?: ListChartReleaseResponseBodyChartReleases[];
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F68823F6-F1B5-4A4E-8421-A83CAB8F2963
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      chartReleases: 'ChartReleases',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartReleases: { 'type': 'array', 'itemType': ListChartReleaseResponseBodyChartReleases },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chartReleases)) {
      $dara.Model.validateArray(this.chartReleases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

