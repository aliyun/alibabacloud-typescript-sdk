// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesStorageOss } from "./DescribeInstancesResponseBodyInstancesStorageOss";


export class DescribeInstancesResponseBodyInstancesStorage extends $dara.Model {
  fullyManaged?: boolean;
  orderState?: string;
  oss?: DescribeInstancesResponseBodyInstancesStorageOss;
  supportCreateFullyManagedStorage?: boolean;
  supportMigrationProgressDetection?: boolean;
  static names(): { [key: string]: string } {
    return {
      fullyManaged: 'FullyManaged',
      orderState: 'OrderState',
      oss: 'Oss',
      supportCreateFullyManagedStorage: 'SupportCreateFullyManagedStorage',
      supportMigrationProgressDetection: 'SupportMigrationProgressDetection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullyManaged: 'boolean',
      orderState: 'string',
      oss: DescribeInstancesResponseBodyInstancesStorageOss,
      supportCreateFullyManagedStorage: 'boolean',
      supportMigrationProgressDetection: 'boolean',
    };
  }

  validate() {
    if(this.oss && typeof (this.oss as any).validate === 'function') {
      (this.oss as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

