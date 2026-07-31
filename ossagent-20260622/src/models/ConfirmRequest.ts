// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmRequestToolCalls extends $dara.Model {
  id?: string;
  modifiedInput?: { [key: string]: any };
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      modifiedInput: 'modifiedInput',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      modifiedInput: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  validate() {
    if(this.modifiedInput) {
      $dara.Model.validateMap(this.modifiedInput);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmRequest extends $dara.Model {
  confirmed?: boolean;
  phase?: string;
  reason?: string;
  sessionId?: string;
  toolCalls?: ConfirmRequestToolCalls[];
  static names(): { [key: string]: string } {
    return {
      confirmed: 'confirmed',
      phase: 'phase',
      reason: 'reason',
      sessionId: 'sessionId',
      toolCalls: 'toolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirmed: 'boolean',
      phase: 'string',
      reason: 'string',
      sessionId: 'string',
      toolCalls: { 'type': 'array', 'itemType': ConfirmRequestToolCalls },
    };
  }

  validate() {
    if(Array.isArray(this.toolCalls)) {
      $dara.Model.validateArray(this.toolCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

