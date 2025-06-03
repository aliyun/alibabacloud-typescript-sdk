// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSurveyResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

