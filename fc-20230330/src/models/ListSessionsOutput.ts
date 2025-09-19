// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Session } from "./Session";


export class ListSessionsOutput extends $dara.Model {
  /**
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  sessions?: Session[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      sessions: 'sessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      sessions: { 'type': 'array', 'itemType': Session },
    };
  }

  validate() {
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

