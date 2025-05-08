// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The version number of the application. Separate multiple version numbers with commas (,). If you want to query data of all versions of applications, specify All for this parameter. By default, only data of applications in the stable versions are queried.
   * 
   * @example
   * v1,v2
   */
  appVersions?: string;
  /**
   * @remarks
   * The name of the application cluster. Separate multiple names with commas (,). If you want to query applications of all clusters in your account, specify All for this parameter. Default value: All.
   * 
   * @example
   * poc,pre
   */
  clusterNames?: string;
  /**
   * @remarks
   * The region level by which edge resources of the application are collected. The value is of the enumeration type. Valid values:
   * 
   * *   National: Chinese mainland
   * *   Big: area
   * *   Middle: province
   * *   Small: city
   * *   RegionId: edge node
   * 
   * Default value: National.
   * 
   * @example
   * National
   */
  level?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the 2006-01-02 format. By default, the time range to query is not restricted.
   * 
   * @example
   * 2022-02-20
   */
  maxDate?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the 2006-01-02 format. By default, the time range to query is not restricted.
   * 
   * @example
   * 2022-02-15
   */
  minDate?: string;
  /**
   * @remarks
   * Specifies whether to return other information about the application, such as statistics on resource instances and pods. The value must be a JSON string. By default, all information is returned.
   * 
   * @example
   * {\\"appInfo\\":true,\\"detailStat\\": true, \\"appVersionStat\\": true, \\"districtStat\\":true ,\\"instanceStat\\": true, \\"podCountStat\\": true}
   */
  outAppInfoParams?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. This parameter is optional if you want to return the push status of all data files.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. This parameter is optional if you want to return all information about the applications.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appVersions: 'AppVersions',
      clusterNames: 'ClusterNames',
      level: 'Level',
      maxDate: 'MaxDate',
      minDate: 'MinDate',
      outAppInfoParams: 'OutAppInfoParams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersions: 'string',
      clusterNames: 'string',
      level: 'string',
      maxDate: 'string',
      minDate: 'string',
      outAppInfoParams: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

