// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the resource file.
   * 
   * > This field is of type Long in SDK versions prior to 8.0.0, and of type String in SDK version 8.0.0 and later. This change does not affect the normal use of the SDK; parameters are still returned according to the type defined in the SDK. Compilation failures due to the type change may occur only when upgrading the SDK across version 8.0.0, in which case users need to manually correct the data type.
   * 
   * @example
   * 631478864897630XXXX
   */
  id?: string;
  /**
   * @remarks
   * A5B97987-66EA-5563-9599-A2752292XXXX
   * 
   * @example
   * The ID of the file resource.
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

