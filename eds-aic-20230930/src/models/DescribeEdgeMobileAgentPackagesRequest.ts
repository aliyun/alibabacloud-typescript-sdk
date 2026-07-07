// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeMobileAgentPackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The device type filter. Valid values: BOX, PHONE, PAD, and OTHER.
   * 
   * @example
   * BOX
   */
  deviceClass?: string;
  /**
   * @remarks
   * The list of license keys. Separate multiple keys with commas.
   * 
   * @example
   * lic-ez197xvdf0j5eo0*****
   */
  licenseKeys?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Leave this parameter empty for the first query. For subsequent queries, use the value returned in the previous response.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of package IDs. Separate multiple IDs with commas.
   * 
   * @example
   * cmag-0c1g77wjljl9hc****
   */
  packageIds?: string;
  /**
   * @remarks
   * The package status filter.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      deviceClass: 'DeviceClass',
      licenseKeys: 'LicenseKeys',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      packageIds: 'PackageIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceClass: 'string',
      licenseKeys: 'string',
      maxResults: 'number',
      nextToken: 'string',
      packageIds: 'string',
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

