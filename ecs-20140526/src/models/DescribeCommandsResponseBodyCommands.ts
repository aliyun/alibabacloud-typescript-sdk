// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCommandsResponseBodyCommandsCommand } from "./DescribeCommandsResponseBodyCommandsCommand";


export class DescribeCommandsResponseBodyCommands extends $dara.Model {
  command?: DescribeCommandsResponseBodyCommandsCommand[];
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': DescribeCommandsResponseBodyCommandsCommand },
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

