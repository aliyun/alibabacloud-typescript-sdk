// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelAccountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dtsJobId?: string;
  ownerId?: string;
  region?: string;
  regionId?: string;
  resourceGroupId?: string;
  tags?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      ownerId: 'OwnerId',
      region: 'Region',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      ownerId: 'string',
      region: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

