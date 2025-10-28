// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnosisResponseBody extends $dara.Model {
  /**
   * @example
   * Resource.InsufficientResource
   */
  reasonCode?: string;
  /**
   * @example
   * Insufficient resource
   */
  reasonMessage?: string;
  /**
   * @example
   * Switch resource config
   */
  solutionMessage?: string;
  static names(): { [key: string]: string } {
    return {
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      solutionMessage: 'SolutionMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasonCode: 'string',
      reasonMessage: 'string',
      solutionMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

