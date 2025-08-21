// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConnQuestionResponseBody extends $dara.Model {
  /**
   * @example
   * 1000002123
   */
  outlineId?: number;
  /**
   * @example
   * C191B48B-9268-4FB1-A3C2-5143B4A91D0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      outlineId: 'OutlineId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlineId: 'number',
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

