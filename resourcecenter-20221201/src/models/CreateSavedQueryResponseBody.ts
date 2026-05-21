// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSavedQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * sq-GeAck****
   */
  queryId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EFA806B9-7F36-55AB-8B7A-D680C2C5EE57
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'QueryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
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

