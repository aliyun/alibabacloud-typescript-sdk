// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGadInstancesResponseBodyGadInstancesGadInstanceMembers extends $dara.Model {
  DBInstanceID?: string;
  dtsInstance?: string;
  engine?: string;
  engineVersion?: string;
  regionId?: string;
  resourceGroupId?: string;
  role?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      dtsInstance: 'DtsInstance',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'string',
      dtsInstance: 'string',
      engine: 'string',
      engineVersion: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      role: 'string',
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

export class DescribeGadInstancesResponseBodyGadInstances extends $dara.Model {
  creationTime?: string;
  description?: string;
  gadInstanceMembers?: DescribeGadInstancesResponseBodyGadInstancesGadInstanceMembers[];
  gadInstanceName?: string;
  modificationTime?: string;
  service?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      gadInstanceMembers: 'GadInstanceMembers',
      gadInstanceName: 'GadInstanceName',
      modificationTime: 'ModificationTime',
      service: 'Service',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      gadInstanceMembers: { 'type': 'array', 'itemType': DescribeGadInstancesResponseBodyGadInstancesGadInstanceMembers },
      gadInstanceName: 'string',
      modificationTime: 'string',
      service: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gadInstanceMembers)) {
      $dara.Model.validateArray(this.gadInstanceMembers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGadInstancesResponseBody extends $dara.Model {
  gadInstances?: DescribeGadInstancesResponseBodyGadInstances[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gadInstances: 'GadInstances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gadInstances: { 'type': 'array', 'itemType': DescribeGadInstancesResponseBodyGadInstances },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gadInstances)) {
      $dara.Model.validateArray(this.gadInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

