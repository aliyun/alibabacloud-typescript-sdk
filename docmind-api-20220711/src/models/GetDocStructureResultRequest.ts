// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocStructureResultRequest extends $dara.Model {
  /**
   * @example
   * docmind-20220816-1e89d65c
   */
  id?: string;
  imageStrategy?: string;
  revealMarkdown?: boolean;
  useUrlResponseBody?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      imageStrategy: 'ImageStrategy',
      revealMarkdown: 'RevealMarkdown',
      useUrlResponseBody: 'UseUrlResponseBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      imageStrategy: 'string',
      revealMarkdown: 'boolean',
      useUrlResponseBody: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

