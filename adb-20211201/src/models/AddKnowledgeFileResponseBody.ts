// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddKnowledgeFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the imported file.
   * 
   * @example
   * 2059412857631539200
   */
  id?: number;
  /**
   * @remarks
   * The location of the imported file.
   * 
   * @example
   * oss://bucket_name/path/to/file
   */
  location?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      location: 'Location',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      location: 'string',
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

