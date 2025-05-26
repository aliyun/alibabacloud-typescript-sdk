// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateFileMetaResponseBodyFiles extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the value of the Success parameter is false.
   * 
   * @example
   * *error.OpError : InvalidArgument | Index KV count exceeded, should be no more than 100.
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * Enumerated values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * The URI of the file.
   * 
   * @example
   * oss://examplebucket/example.jpg
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      success: 'Success',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      success: 'boolean',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

