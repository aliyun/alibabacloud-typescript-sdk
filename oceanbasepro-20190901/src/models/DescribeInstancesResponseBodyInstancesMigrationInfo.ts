// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesMigrationInfoCheckResult } from "./DescribeInstancesResponseBodyInstancesMigrationInfoCheckResult";


export class DescribeInstancesResponseBodyInstancesMigrationInfo extends $dara.Model {
  checkResult?: DescribeInstancesResponseBodyInstancesMigrationInfoCheckResult;
  migratable?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'CheckResult',
      migratable: 'Migratable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: DescribeInstancesResponseBodyInstancesMigrationInfoCheckResult,
      migratable: 'boolean',
    };
  }

  validate() {
    if(this.checkResult && typeof (this.checkResult as any).validate === 'function') {
      (this.checkResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

