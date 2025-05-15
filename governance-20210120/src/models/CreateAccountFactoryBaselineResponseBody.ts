// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountFactoryBaselineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * afb-bp1e6ixtiwupap8m****
   */
  baselineId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5592E2E-0FC4-557C-B989-DF229B5EBE13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

