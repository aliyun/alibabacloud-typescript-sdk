// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicTemplateStatusReason extends $dara.Model {
  /**
   * @remarks
   * The details of the failure reason.
   * 
   * @example
   * pull image failed: timeout
   */
  message?: string;
  /**
   * @remarks
   * The identity of the failed step.
   * 
   * @example
   * build
   */
  step?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      step: 'step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      step: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

