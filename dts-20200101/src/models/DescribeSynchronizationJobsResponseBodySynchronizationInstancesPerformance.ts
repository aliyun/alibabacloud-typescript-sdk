// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance extends $dara.Model {
  /**
   * @remarks
   * The data traffic that is synchronized per second. Unit: MB/s.
   * 
   * @example
   * 1
   */
  FLOW?: string;
  /**
   * @remarks
   * The number of times SQL statements are synchronized per second, including BEGIN, COMMIT, DML, and DDL statements. DML statements include INSERT, DELETE, and UPDATE.
   * 
   * @example
   * 100
   */
  RPS?: string;
  static names(): { [key: string]: string } {
    return {
      FLOW: 'FLOW',
      RPS: 'RPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FLOW: 'string',
      RPS: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

