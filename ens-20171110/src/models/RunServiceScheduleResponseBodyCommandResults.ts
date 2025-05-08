// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunServiceScheduleResponseBodyCommandResultsCommandResult } from "./RunServiceScheduleResponseBodyCommandResultsCommandResult";


export class RunServiceScheduleResponseBodyCommandResults extends $dara.Model {
  commandResult?: RunServiceScheduleResponseBodyCommandResultsCommandResult[];
  static names(): { [key: string]: string } {
    return {
      commandResult: 'CommandResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandResult: { 'type': 'array', 'itemType': RunServiceScheduleResponseBodyCommandResultsCommandResult },
    };
  }

  validate() {
    if(Array.isArray(this.commandResult)) {
      $dara.Model.validateArray(this.commandResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

