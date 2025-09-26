// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MCPPathMatch } from "./McppathMatch";


export class MCPMatch extends $dara.Model {
  path?: MCPPathMatch;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: MCPPathMatch,
    };
  }

  validate() {
    if(this.path && typeof (this.path as any).validate === 'function') {
      (this.path as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

