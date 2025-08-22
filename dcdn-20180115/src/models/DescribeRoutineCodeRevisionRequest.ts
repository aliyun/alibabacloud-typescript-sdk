// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRoutineCodeRevisionRequest extends $dara.Model {
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
   * The version of the JavaScript code that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1611151912787121550
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

