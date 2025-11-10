// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCLICommandResponseBody extends $dara.Model {
  /**
   * @example
   * aliyun ecs DescribeRegions --ResourceType instance
   */
  cli?: string;
  static names(): { [key: string]: string } {
    return {
      cli: 'cli',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cli: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

