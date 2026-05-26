// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DefinitionCedar extends $dara.Model {
  statement?: string;
  static names(): { [key: string]: string } {
    return {
      statement: 'Statement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statement: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Definition extends $dara.Model {
  cedar?: DefinitionCedar;
  static names(): { [key: string]: string } {
    return {
      cedar: 'Cedar',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cedar: DefinitionCedar,
    };
  }

  validate() {
    if(this.cedar && typeof (this.cedar as any).validate === 'function') {
      (this.cedar as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

