// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateRequest extends $dara.Model {
  /**
   * @example
   * 13b721e6-8cc8-5df2-af13-80316f7508af
   */
  teamID?: string;
  static names(): { [key: string]: string } {
    return {
      teamID: 'teamID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teamID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

