// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessPointsResponseBodyAccessPointSetAccessPointType extends $dara.Model {
  accessPointId?: string;
  attachedRegionNo?: string;
  description?: string;
  hostOperator?: string;
  location?: string;
  name?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      attachedRegionNo: 'AttachedRegionNo',
      description: 'Description',
      hostOperator: 'HostOperator',
      location: 'Location',
      name: 'Name',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      attachedRegionNo: 'string',
      description: 'string',
      hostOperator: 'string',
      location: 'string',
      name: 'string',
      status: 'string',
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

