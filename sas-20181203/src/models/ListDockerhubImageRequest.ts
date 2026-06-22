// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDockerhubImageRequest extends $dara.Model {
  /**
   * @remarks
   * The image query condition. The format is `[namespace/]repoName[:version]`. The query conditions in `[]` are optional.
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

