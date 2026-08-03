// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSessionRequest extends $dara.Model {
  projectId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

