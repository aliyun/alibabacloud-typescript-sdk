// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEditingProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the online editing project. You can specify multiple IDs separated with commas (,).
   * 
   * @example
   * ****fb2101bf24bf41cb318787dc****,****87dcfb2101bf24bf41cb3187****
   */
  projectIds?: string;
  static names(): { [key: string]: string } {
    return {
      projectIds: 'ProjectIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

