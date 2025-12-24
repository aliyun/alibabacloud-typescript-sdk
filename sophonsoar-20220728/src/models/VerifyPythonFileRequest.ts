// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyPythonFileRequest extends $dara.Model {
  /**
   * @remarks
   * The Python code snippet.
   * 
   * This parameter is required.
   * 
   * @example
   * import logging
   * def execute (params):
   *   success=True
   *   message=\\"OK\\"
   *   data=[]
   *   return (success,message,data)
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

