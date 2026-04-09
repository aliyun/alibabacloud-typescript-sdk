// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCLICommandResponseBody extends $dara.Model {
  /**
   * @example
   * aliyun ecs DescribeRegions --ResourceType instance
   */
  cli?: string;
  requestId?: string;
  unifiedCli?: string;
  static names(): { [key: string]: string } {
    return {
      cli: 'cli',
      requestId: 'requestId',
      unifiedCli: 'unifiedCli',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cli: 'string',
      requestId: 'string',
      unifiedCli: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

