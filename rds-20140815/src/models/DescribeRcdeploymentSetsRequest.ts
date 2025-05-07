// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCDeploymentSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the deployment sets. The value can be a JSON array that consists of deployment set IDs in the format of `["ds-xxxxxxxxx", "ds-yyyyyyyyy", ... "ds-zzzzzzzzz"]`. You can specify up to 100 deployment set IDs in each request. Separate the deployment set IDs with commas (,).
   * 
   * @example
   * ["ds-2zeeuw16zo2gr9e6****"]
   */
  deploymentSetIds?: string;
  /**
   * @remarks
   * The deployment set name. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain digits, letters, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * deployment_test
   */
  deploymentSetName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The deployment strategy. Valid values:
   * 
   * *   **Availability**: high availability strategy
   * *   **AvailabilityGroup**: high availability group strategy
   * 
   * Default value: Availability.
   * 
   * @example
   * Availability
   */
  strategy?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentSetIds: 'DeploymentSetIds',
      deploymentSetName: 'DeploymentSetName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      strategy: 'Strategy',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSetIds: 'string',
      deploymentSetName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      strategy: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

