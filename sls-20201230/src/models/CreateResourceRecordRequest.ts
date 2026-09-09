// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceRecord } from "./ResourceRecord";


export class CreateResourceRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The resource record to create.
   * 
   * This parameter is required.
   */
  body?: ResourceRecord;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ResourceRecord,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

