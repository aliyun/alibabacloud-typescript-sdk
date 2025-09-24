// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFaceGroupRequest extends $dara.Model {
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * 65c030cd54b23283ceb27b4ade5da49d
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test008
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

