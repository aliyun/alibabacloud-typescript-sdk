// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceSpecInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 2
   */
  CPU?: string;
  /**
   * @remarks
   * The description of the instance type.
   * 
   * @example
   * 2核8GB（独享型）
   */
  description?: string;
  /**
   * @remarks
   * The memory size, in GB.
   * 
   * @example
   * 8
   */
  memory?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6B82A9EF-9961-5A31-A19F-009B709xxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      description: 'Description',
      memory: 'Memory',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      description: 'string',
      memory: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

