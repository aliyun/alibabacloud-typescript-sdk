// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class E2BLifecycle extends $dara.Model {
  autoResume?: boolean;
  onTimeout?: string;
  static names(): { [key: string]: string } {
    return {
      autoResume: 'autoResume',
      onTimeout: 'onTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoResume: 'boolean',
      onTimeout: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

