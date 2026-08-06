// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSemanticJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the job to delete. Use the Data.Name value from the CreateSemanticJob response or the Name value from a ListSemanticJobs list item.
   * 
   * This parameter is required.
   * 
   * @example
   * semantic-job-demo
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

