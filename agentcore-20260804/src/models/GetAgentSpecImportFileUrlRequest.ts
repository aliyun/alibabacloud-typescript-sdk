// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentSpecImportFileUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The Content-Type of the uploaded file. You must use the same value returned in the response when the client sends a PUT request.
   * 
   * @example
   * application/zip
   */
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

