// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKmsAssociateResourcesResponseBodyAssociateDBInstances extends $dara.Model {
  DBInstanceName?: string;
  engine?: string;
  keyUsedBy?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      engine: 'Engine',
      keyUsedBy: 'KeyUsedBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      engine: 'string',
      keyUsedBy: 'string',
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

export class DescribeKmsAssociateResourcesResponseBody extends $dara.Model {
  associateDBInstances?: DescribeKmsAssociateResourcesResponseBodyAssociateDBInstances[];
  associateStatus?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      associateDBInstances: 'AssociateDBInstances',
      associateStatus: 'AssociateStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateDBInstances: { 'type': 'array', 'itemType': DescribeKmsAssociateResourcesResponseBodyAssociateDBInstances },
      associateStatus: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.associateDBInstances)) {
      $dara.Model.validateArray(this.associateDBInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

