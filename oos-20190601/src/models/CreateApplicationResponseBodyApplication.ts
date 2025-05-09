// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationResponseBodyApplication extends $dara.Model {
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2021-09-07T09:17:46Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * application
   */
  description?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Myapplication
   */
  name?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The time when the application was updated.
   * 
   * @example
   * 2021-09-07T09:17:46Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      description: 'Description',
      name: 'Name',
      tags: 'Tags',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      description: 'string',
      name: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      updateDate: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

