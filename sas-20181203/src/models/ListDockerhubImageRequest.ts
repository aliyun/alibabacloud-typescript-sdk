// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDockerhubImageRequest extends $dara.Model {
  /**
   * @remarks
   * The query condition for images. You can query images in the `[namespace/]repoName[:version]` format. Conditions in `[]` are optional.
   * 
   * This parameter is required.
   * 
   * @example
   * python:3.9
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

