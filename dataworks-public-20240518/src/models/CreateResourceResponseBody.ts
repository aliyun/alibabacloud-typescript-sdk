// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the resource file.
   * 
   * >Notice: This field was of the Long type in SDK versions earlier than 8.0.0 and is of the String type in SDK 8.0.0 and later. **This change does not affect normal SDK usage, and the parameter is still returned in the type defined in the SDK**. The type change may cause project compilation failures only when you upgrade across SDK version 8.0.0. In this case, you must manually correct the data type.
   * 
   * @example
   * 631478864897630XXXX
   */
  id?: string;
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
   * 
   * @example
   * A5B97987-66EA-5563-9599-A2752292****
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
      id: 'string',
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

