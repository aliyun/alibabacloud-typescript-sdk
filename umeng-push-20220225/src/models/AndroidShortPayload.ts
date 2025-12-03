// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AndroidShortPayloadBody extends $dara.Model {
  custom?: string;
  static names(): { [key: string]: string } {
    return {
      custom: 'custom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custom: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AndroidShortPayload extends $dara.Model {
  body?: AndroidShortPayloadBody;
  extra?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      extra: 'extra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AndroidShortPayloadBody,
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

