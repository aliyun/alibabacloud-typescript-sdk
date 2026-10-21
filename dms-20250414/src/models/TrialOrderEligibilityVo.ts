// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrialOrderEligibilityVO extends $dara.Model {
  message?: string;
  valid?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      valid: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

