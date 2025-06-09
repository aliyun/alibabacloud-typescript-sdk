// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogGroup } from "./LogGroup";


export class PutLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The compressed Protobuf data.
   */
  body?: LogGroup;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: LogGroup,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

