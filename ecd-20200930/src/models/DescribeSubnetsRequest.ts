// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubnetsRequest extends $dara.Model {
  eid?: string;
  maxResults?: number;
  name?: string;
  nextToken?: string;
  officeSiteId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      eid: 'Eid',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eid: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      subnetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

