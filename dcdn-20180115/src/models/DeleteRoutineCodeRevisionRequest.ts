// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRoutineCodeRevisionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the routine. The name must be unique among the routines that belong to the same Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of the version that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  selectCodeRevision?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      selectCodeRevision: 'SelectCodeRevision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      selectCodeRevision: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

