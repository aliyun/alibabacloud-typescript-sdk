// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeAnomalyDiagnosisRequest extends $dara.Model {
  /**
   * @example
   * 8047d763-5465-4a8c-b1cd-23f5a8ba2594
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

