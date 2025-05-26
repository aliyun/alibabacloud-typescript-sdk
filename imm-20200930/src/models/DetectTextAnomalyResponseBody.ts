// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectTextAnomalyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 91AC8C98-0F36-49D2-8290-742E24DF*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the text contains anomalies. Valid values:
   * 
   * *   pass: the text does not contain anomalies.
   * *   block: the text contains anomalies.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

