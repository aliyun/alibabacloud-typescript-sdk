// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataIngestionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data ingestion ID.
   * 
   * @example
   * di-yxtm3l2rwa7fr5uvxtc7
   */
  dataIngestionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataIngestionId: 'DataIngestionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIngestionId: 'string',
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

