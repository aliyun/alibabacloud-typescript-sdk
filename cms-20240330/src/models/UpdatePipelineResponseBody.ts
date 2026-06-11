// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * E99F1CCD-256A-5DF9-9B67-8F4A7ACE7132
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

