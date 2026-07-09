// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteReportDefinitionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the subscription is deleted.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The metadata of the response struct.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      metadata: 'any',
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

