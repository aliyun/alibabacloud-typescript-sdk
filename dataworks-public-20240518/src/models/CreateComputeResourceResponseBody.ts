// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComputeResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returns the ID of the created computing resource.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The request ID. You can use the request ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

