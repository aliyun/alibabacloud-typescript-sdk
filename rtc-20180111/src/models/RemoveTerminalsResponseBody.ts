// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveTerminalsResponseBodyTerminalsTerminal extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 1811****
   */
  id?: string;
  /**
   * @example
   * Success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTerminalsResponseBodyTerminals extends $dara.Model {
  terminal?: RemoveTerminalsResponseBodyTerminalsTerminal[];
  static names(): { [key: string]: string } {
    return {
      terminal: 'Terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terminal: { 'type': 'array', 'itemType': RemoveTerminalsResponseBodyTerminalsTerminal },
    };
  }

  validate() {
    if(Array.isArray(this.terminal)) {
      $dara.Model.validateArray(this.terminal);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTerminalsResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  terminals?: RemoveTerminalsResponseBodyTerminals;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      terminals: 'Terminals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      terminals: RemoveTerminalsResponseBodyTerminals,
    };
  }

  validate() {
    if(this.terminals && typeof (this.terminals as any).validate === 'function') {
      (this.terminals as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

