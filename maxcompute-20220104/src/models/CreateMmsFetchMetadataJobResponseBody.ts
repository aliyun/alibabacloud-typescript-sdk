// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMmsFetchMetadataJobResponseBodyData } from "./CreateMmsFetchMetadataJobResponseBodyData";


export class CreateMmsFetchMetadataJobResponseBody extends $dara.Model {
  data?: CreateMmsFetchMetadataJobResponseBodyData;
  /**
   * @example
   * CC4D05E8-0613-5A8E-9339-A0EBD097A69E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateMmsFetchMetadataJobResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

