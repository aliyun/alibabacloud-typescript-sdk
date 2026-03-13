// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConcurrencyConfig extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN).
   * 
   * @example
   * acs:fc:cn-shanghai:123:functions/demo
   */
  functionArn?: string;
  /**
   * @remarks
   * The reserved concurrency of the function. Other functions cannot use the concurrency. The reserved concurrency includes the total concurrency of provisioned instances and on-demand instances.
   * 
   * @example
   * 10
   */
  reservedConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      functionArn: 'functionArn',
      reservedConcurrency: 'reservedConcurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArn: 'string',
      reservedConcurrency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

