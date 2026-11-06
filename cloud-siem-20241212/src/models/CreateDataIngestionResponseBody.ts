// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataIngestionResponseBody extends $dara.Model {
  dataIngestionId?: string;
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

