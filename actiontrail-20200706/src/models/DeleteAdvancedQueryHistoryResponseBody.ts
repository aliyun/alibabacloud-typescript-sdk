// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAdvancedQueryHistoryResponseBody extends $dara.Model {
  /**
   * @example
   * 04857D99-8B0C-53EB-85F1-E64198E7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

