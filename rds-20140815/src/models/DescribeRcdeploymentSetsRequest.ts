// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCDeploymentSetsRequest extends $dara.Model {
  deploymentSetIds?: string;
  deploymentSetName?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
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

