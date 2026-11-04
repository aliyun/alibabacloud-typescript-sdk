// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateCacheInput extends $dara.Model {
  /**
   * @remarks
   * The team ID.
   * 
   * @example
   * 13b721e6-8cc8-5df2-af13-80316f7508af
   */
  teamID?: string;
  /**
   * @remarks
   * The unique identifier of the template.
   * 
   * @example
   * us7dxqaezw5uu7aa2cm5
   */
  templateID?: string;
  static names(): { [key: string]: string } {
    return {
      teamID: 'teamID',
      templateID: 'templateID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teamID: 'string',
      templateID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

