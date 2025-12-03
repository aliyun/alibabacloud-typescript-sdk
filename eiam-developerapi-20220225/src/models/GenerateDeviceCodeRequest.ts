// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDeviceCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization scope.
   * 
   * @example
   * xxx
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

