// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPerformance extends $dara.Model {
  /**
   * @remarks
   * The size of data that is migrated or synchronized per second. Unit: Mbit/s.
   * 
   * @example
   * 1
   */
  flow?: string;
  /**
   * @remarks
   * The number of times that SQL statements are migrated or synchronized per second, including BEGIN, COMMIT, DML, and DDL statements. DML statements include INSERT, DELETE, and UPDATE.
   * 
   * @example
   * 100
   */
  rps?: string;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      rps: 'Rps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      rps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

