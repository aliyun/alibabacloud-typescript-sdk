// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCLICommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CLI instruction.
   * 
   * @example
   * aliyun ecs DescribeRegions --ResourceType instance
   */
  cli?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A707AFA8-1A4C-5B2A-A165-8436C1EA38DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cli: 'cli',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cli: 'string',
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

